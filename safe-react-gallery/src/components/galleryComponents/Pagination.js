import React from 'react';
import './Pagination.css';

// For first page exclude previous button;

const Pagination = () => (
  <div className="pagination">
    <button className="btn" type="submit">Previous</button>
    <button className="btn" type="submit">Next</button>
  </div>
);

export default Pagination;
