import s from './ImageGalleryItem.module.css';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {};

  render() {
    const { img } = this.props;
    return (
      <li className={s.galleryItem}>
        <img src={img.largeImageURL} alt="" className={s.galleryImg} />
      </li>
    );
  }
}
export default ImageGalleryItem;
