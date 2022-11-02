import React from 'react';
import Images from './galleryComponents/Images';
import Pagination from './galleryComponents/Pagination';
import Searchbar from './galleryComponents/Searchbar';

const Gallery = () => (
  <div>
    <Searchbar />
    <Images />
    <Pagination />
  </div>
);

export default Gallery;
