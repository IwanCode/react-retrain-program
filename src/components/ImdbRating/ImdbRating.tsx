import React from 'react';
import { useFetch } from '../../hooks';
import style from './ImdbRating.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function ImdbRating ({ id } : {
    id: string | null
}) {
    return (
        <>
            <a 
                href={`https://www.imdb.com/title/${id}`} 
                target="_blank"
                className={cx('text')}
            >
                IMDB
            </a>
        </>
    );
}

export default ImdbRating;