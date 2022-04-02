import s from './ImageGallery.module.css';
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ onModalOpen, arreyImg }) => {
  return (
    <ul onClick={() => onModalOpen()} className={s.imageGallery}>
      {arreyImg.map(impg => {
        return <ImageGalleryItem key={impg.id} impg={impg} />;
      })}
    </ul>
  );
};
export default ImageGallery;
