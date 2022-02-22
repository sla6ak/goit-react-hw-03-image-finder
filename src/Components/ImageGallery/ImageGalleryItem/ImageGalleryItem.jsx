import s from './ImageGalleryItem.module.css';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {};

  render() {
    return (
      <>
        <li className={s.galleryItem}>
          <img src="" alt="" />
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
