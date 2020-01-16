import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import TMDPoster from '../TMDPoster';

import styles from './MoviesList.module.scss';

const cx = classNames.bind(styles);

function MoviesList({ data }) {
  return (
    <ul className={cx('movies-list', 'root', 'row', 'browser-default')}>
      {data.results.map(({ id, poster_path, title }) => (
        <li className={cx('item', 'col', 's2')} key={id}>
          <Link to={`/movies/${id}`}>
            <TMDPoster
              size={3}
              src={poster_path}
              alt={title + ' poster'}
              className="responsive-img"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
