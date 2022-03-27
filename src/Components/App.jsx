import React from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify'; // попапы
//так как в моем проэкте есть попапы, я не буду созавать отдельные компоненты для рендера в них ошибок, а просто использую ифы.

class App extends React.Component {
  state = {
    pages: 1,
    searchWord: '',
    arreyImg: [],
    modal: null,
    sceleton: false,
    error: null,
  };

  //это функция пропс для поискового запроса
  //при новом поисковом слове скинем страницу в первую.
  setSearchWord = searchWord => {
    this.setState({ searchWord: searchWord, pages: 1 });
  };

  //это функция пропс для кнопки листания страниц
  loadMore = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1,
    }));
  };

  //запрос на сервер по сабмиту
  findImg = async isNew => {
    //рендерим загрузчик
    this.setState({ sceleton: true });
    const BASEurl = 'https://pixabay.com/api/';
    //параметры запроса
    const meta = new URLSearchParams({
      key: '25142623-5ec88ba8c20545ff15079e1b4',
      q: this.state.searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.state.pages, //получает состояние
      per_page: 12,
    });
    const url = `${BASEurl}?${meta}`;
    try {
      const findImgsJSON = await fetch(url);
      const findImgs = await findImgsJSON.json();
      if (findImgs.totalHits === 0) {
        toast.warning(`We cant finde nosing`);
      } else {
        toast.success(
          `We finde ${
            findImgs.totalHits > this.state.pages * 12
              ? this.state.pages * 12
              : 'last imges'
          } of ${findImgs.totalHits} imeges`
        );
        //тут мы возвратим массив с ответом
        // console.log(findImgs.totalHits.toString());
      }
      // и вызовем функцию отрисовки
      isNew ? this.renderNew(findImgs.hits) : this.renderMore(findImgs.hits);
    } catch (err) {
      this.setState({ error: err });
      toast.error(`Happend ${this.state.error}`);
    }
    //скрываем загрузчик
    this.setState({ sceleton: false });
  };

  //функция отрисовки переписывает стейт тем самым рендерит новые карточки
  renderMore = arreyImg => {
    this.setState(prevState => ({
      arreyImg: [...prevState.arreyImg, ...arreyImg],
    }));
  };

  renderNew = arreyImg => {
    this.setState(() => ({
      arreyImg: [...arreyImg],
    }));
  };

  // при изменении состояния поиска вызывает запрос
  componentDidUpdate(pProp, pState) {
    if (pState.searchWord !== this.state.searchWord) {
      this.findImg(true);
    } //если новое слово тру
    else if (pState.pages !== this.state.pages) {
      this.findImg(false);
    } //если старое слово фолс
  }

  onModalOpen = e => {
    // console.log(e.target.dataset.img);
    this.setState(() => ({
      modal: e.target.dataset.img,
    }));
  };

  onModalClouse = e => {
    this.setState(() => ({
      modal: null,
    }));
  };

  render() {
    return (
      <div className={s.papers}>
        <Searchbar setSearchWord={this.setSearchWord} />
        <ImageGallery
          arreyImg={this.state.arreyImg}
          onModalOpen={this.onModalOpen}
        />
        {this.state.sceleton && <Loader />}
        {this.state.arreyImg.length > 0 && <Button loadMore={this.loadMore} />}
        {this.state.modal && (
          <Modal
            imgFull={this.state.modal}
            onModalClouse={this.onModalClouse}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
