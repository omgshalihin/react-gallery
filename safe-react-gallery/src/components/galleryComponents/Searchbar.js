import React, { useState, useEffect, createContext } from 'react';
import './searchBar.css';
// eslint-disable-next-line import/no-cycle
import Images from './Images';

export const ImagesContext = createContext([]);

const Searchbar = () => {
  const [img, setImg] = useState('cats');
  const [res, setRes] = useState([]);
  const clientId = 'tVZ5XSggCGfp4quPNGW_BIEULp4AV06QDPbnVUKT3Xc';
  const url = `https://api.unsplash.com/search/photos?query=${img}&per_page=1&client_id=${clientId}`;

  const fetchRequest = async () => {
    const result = await fetch(url)
      .then(data => data.json())
      .then(data => data.results);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg('');
  };
  return (
    <div>
      <div className="searchBar">
        <input
          type="text"
          onChange={e => setImg(e.target.value)}
          placeholder="Search for images" />
        <button type="submit" onClick={Submit}>button</button>
      </div>
      <ImagesContext.Provider value={res}>
        <Images />
      </ImagesContext.Provider>
    </div>
  );
};

export default Searchbar;
