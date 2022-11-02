import React, { useContext } from 'react';
import './images.css';
// eslint-disable-next-line import/no-cycle
import { ImagesContext } from './Searchbar';

const Images = () => {
  const images = useContext(ImagesContext);
  console.log(images);

  return (
    <div className="gallery">
      {images.map((val, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <img
            className="images"
            src={val.urls.small}
            alt="val.alt_description" />
        </div>
      ))}
    </div>
  );
};

export default Images;
