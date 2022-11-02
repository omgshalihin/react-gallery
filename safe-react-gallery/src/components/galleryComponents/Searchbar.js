import React, { useState, useEffect } from 'react';
import './searchBar.css';

const Searchbar = () => {
  const [img, setImg] = useState('');
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
      <div className="col-12 d-flex justify-content-evenly flex-wrap">
        {res.map(val => (
          <>
            <img
              className="col-3 img-fluid img-thumbnail"
              src={val.urls.small}
              alt="val.alt_description" />
          </>
        ))}
      </div>
      ;
      <div className="searchBar">
        <input type="text" value={img} onChange={e => setImg(e.target.value)} placeholder="Search for images" />
        <button type="submit" onClick={Submit}>button</button>
      </div>

    </div>
  );
};

export default Searchbar;
