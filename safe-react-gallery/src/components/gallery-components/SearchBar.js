import React, { useState, useEffect, createContext } from 'react';
import './SearchBar.css';
// eslint-disable-next-line import/no-cycle
import Images from './Images';
import Pagination from './Pagination';

export const ImagesContext = createContext([]);

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(1);
  const [img, setImg] = useState('random');
  const orientation = 'squarish';
  const perPage = 10;
  const clientId = process.env.REACT_APP_UNSPLASH_API_KEY;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${img}&orientation=${orientation}&per_page=${perPage}&client_id=${clientId}`;

  // const fetchRequest = async () => {
  //   const result = await fetch(url)
  //     .then(data => data.json())
  //     .then(data => data.results);
  //   setRes(result);
  // };

  // useEffect(() => {
  //   fetchRequest();
  // }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url)
        .then(data => data.json())
        .then(data => data.results);
      setRes(result);
    };
    fetchData();
  }, [url]);

  return (
    <div>
      <form
        className="searchBar"
        onSubmit={e => {
          e.preventDefault();
          setImg(input);
          setPage(1);
        }}>
        <input
          type="text"
          placeholder="search for images"
          value={input}
          onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        <ImagesContext.Provider value={res}>
          <Images />
        </ImagesContext.Provider>
      </div>
      <div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default SearchBar;
