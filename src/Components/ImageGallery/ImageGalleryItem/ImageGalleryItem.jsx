import s from './ImageGalleryItem.module.css';
import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {};

  render() {
    return (
      <>
        <li key={this.props.img.id} className={s.galleryItem}>
          <img src={this.props.img.largeImageURL} alt="" />
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
