import React from 'react';
import style from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Search ({ searchClick, data } : {
    searchClick: Function,
    data: boolean
}) {
    
    return (
        <div 
            className={cx('search-btn', data ? 'open' : 'close')}
            onClick={(e) => searchClick(e)}
        >Search</div>
    );
}

export default Search;
