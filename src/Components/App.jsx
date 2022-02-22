import React from 'react';
// import { nanoid } from 'nanoid'; // генерирует айди
// import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

class App extends React.Component {
  state = {
    pages: 1,
    searchWord: '',
    arreyImg: [],
  };

  //запрос на сервер по сабмиту
  findImg = async searchWord => {
    if (searchWord) this.setState({ searchWord: searchWord });
    const meta = new URLSearchParams({
      key: '25142623-5ec88ba8c20545ff15079e1b4',
      q: this.state.searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.state.pages,
      per_page: 12,
    });
    const url = `https://pixabay.com/api/?${meta}`;
    const findImgsJSON = await fetch(url);
    const findImgs = await findImgsJSON.json();
    this.renderGalery(findImgs.hits);
  };

  renderGalery = arreyImg => {
    this.setState(prevState => ({
      arreyImg: [...prevState.arreyImg, ...arreyImg],
    }));
  };

  componentDidMount() {
    this.findImg();
  }

  componentDidUpdate(pProp, pState) {
    if (pState.pages !== this.state.pages) this.findImg();
  }

  loadMore = () => {
    this.setState(prevState => ({
      pages: prevState.pages + 1,
    }));
  };

  //генерируем необходимые ключи
  // idGenerator = () => nanoid();

  render() {
    return (
      <>
        <Searchbar findImg={this.findImg} />
        <ImageGallery arreyImg={this.state.arreyImg} />
        <Button loadMore={this.loadMore} />
      </>
    );
  }
}
export default App;
