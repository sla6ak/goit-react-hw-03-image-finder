import React from 'react';
import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

class App extends React.Component {
  state = {
    pages: 1,
    searchWord: '',
    arreyImg: [],
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
    const findImgsJSON = await fetch(url);
    const findImgs = await findImgsJSON.json();
    //тут мы возвратим массив с ответом
    // и вызовем функцию отрисовки
    isNew ? this.renderNew(findImgs.hits) : this.renderMore(findImgs.hits);
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

  render() {
    return (
      <div className={s.papers}>
        <Searchbar setSearchWord={this.setSearchWord} />
        <ImageGallery arreyImg={this.state.arreyImg} />
        {this.state.arreyImg.length > 0 && <Button loadMore={this.loadMore} />}
      </div>
    );
  }
}
export default App;
