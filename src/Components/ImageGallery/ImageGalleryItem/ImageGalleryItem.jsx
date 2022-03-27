import s from './ImageGalleryItem.module.css';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {};

  render() {
    const { img } = this.props;
    return (
      <li className={s.galleryItem}>
        <img
          src={img.webformatURL}
          data-img={img.largeImageURL}
          alt={img.tags}
          className={s.galleryImg}
          width={500}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
