import s from './ImageGallery.module.css';
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  state = {};

  render() {
    return (
      <ul className={s.imageGallery}>
        {this.props.arreyImg.map(img => {
          return <ImageGalleryItem key={img.id} img={img} />;
        })}
      </ul>
    );
  }
}
export default ImageGallery;
