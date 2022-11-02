import React, { useState, useEffect, createContext } from 'react';
import './searchBar.css';
// eslint-disable-next-line import/no-cycle
import Images from './Images';
import Pagination from './Pagination';

export const ImagesContext = createContext([]);

const Searchbar = () => {
  const [img, setImg] = useState('random');
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  console.log(`see here: ${page}`);
  const clientId = 'tVZ5XSggCGfp4quPNGW_BIEULp4AV06QDPbnVUKT3Xc';
  const orientation = 'squarish';
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${img}&orientation=${orientation}&per_page=2&client_id=${clientId}`;

  const fetchRequest = async () => {
    const result = await fetch(url)
      .then(data => data.json())
      .then(data => data.results);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, [page]);

  const Submit = () => {
    fetchRequest();
    setImg(img);
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
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Searchbar;
