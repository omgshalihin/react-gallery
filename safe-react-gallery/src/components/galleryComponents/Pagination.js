import React from 'react';
import './Pagination.css';

// For first page exclude previous button;

const Pagination = ({ page, setPage }) => {
  console.log(`page: ${page}`);
  const decrease = () => setPage(page - 1);
  const increase = () => setPage(page + 1);

  return (
    <div className="pagination">
      {(page !== 1) && <button onClick={decrease} className="btn" type="submit">Previous</button>}
      <button onClick={increase} className="btn" type="submit">Next</button>
    </div>
  );
};

export default Pagination;
