import React, {useState} from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let {portionNumber, setPortionNumber} = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionNumber + 1;
  let rightPortionPageNumber = portionNumber + portionSize;

  return (
    <div className={s.pageNumbers}>
      {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>prev</button>
      }

      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => {
          return <span
            className={`${s.pageNumber} ${currentPage === page && s.selectedPage}`}
            key={page}
            onClick={(e) => {
              onPageChanged(page)
            }}>{page}</span>
        })}

      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>next</button>
      }
    </div>
  )
}

export default Paginator;