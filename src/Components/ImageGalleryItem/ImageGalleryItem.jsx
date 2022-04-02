import s from './ImageGalleryItem.module.css';
import React from 'react';

const ImageGalleryItem = ({ impg }) => {
  return (
    <li className={s.galleryItem}>
      <img
        src={impg.webformatURL}
        data-img={impg.largeImageURL}
        alt={impg.tags}
        className={s.galleryImg}
        width={500}
      />
    </li>
  );
};
export default ImageGalleryItem;
