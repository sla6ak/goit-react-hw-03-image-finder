import s from './ImageGallery.module.css';
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  state = {};

  render() {
    return (
      <ul className={s.imageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}
export default ImageGallery;
