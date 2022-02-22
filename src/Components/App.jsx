import React from 'react';
// import { nanoid } from 'nanoid'; // генерирует айди
// import s from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';

class App extends React.Component {
  state = {};
  BASEURL = 'https://pixabay.com/api/';
  APICEY = '25142623-5ec88ba8c20545ff15079e1b4';

  //генерируем необходимые ключи
  // idGenerator = () => nanoid();

  render() {
    return (
      <>
        <Searchbar searchForm={this.state} />
        <ImageGallery />
        <Button />
      </>
    );
  }
}
export default App;
