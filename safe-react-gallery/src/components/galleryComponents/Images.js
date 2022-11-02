import React, { useContext } from 'react';
import './images.css';
// eslint-disable-next-line import/no-cycle
import { ImagesContext } from './Searchbar';

const Images = () => {
  const images = useContext(ImagesContext);
  console.log(images);

  return (
    <div className="gallery">
      {images.map(val => (
        <>
          <img
            className="images"
            src={val.urls.small}
            alt="val.alt_description" />
        </>
      ))}
    </div>
  );
};

export default Images;
