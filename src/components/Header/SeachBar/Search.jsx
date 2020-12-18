import React from 'react';
import s from './Search.module.css';

const Search = () => {
    return (
        <div className={s.iqSearchBar}>
            <form className={s.searchbox} action="#">
                <input className={s.text + " " + s.searchInput} type="text" placeholder="Поиск..." />
            </form>
        </div>
    )
}

export default Search;