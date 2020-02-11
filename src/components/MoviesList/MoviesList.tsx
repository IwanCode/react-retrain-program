import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import TMDPoster from '../TMDPoster';

import styles from './MoviesList.module.scss';
// import { ITvDiscovery, IMoviesRecomendation } from '../../interfaces';

const cx = classNames.bind(styles);

function MoviesList({ data, target = 'movies' }: {
  // data: ITvDiscovery | IMoviesRecomendation,
  data: any,
  target?: string
}) {
  return (
    <ul className={cx('movies-list', 'root', 'row', 'browser-default')}>
      {data.results.map(
        ({ id, poster_path, title }: { id: number, poster_path: string | null, title: string }) => (
        <li className={cx('item', 'col', 's2')} key={id}>
          <Link to={`/${target}/${id}`}>
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
