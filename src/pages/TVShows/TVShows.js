import React, { useState, useEffect } from 'react';
import styles from './TVShows.module.scss';
import classNames from 'classnames/bind';
import MoviesList from '../../components/MoviesList';
import Navigation from '../../components/Navigation';
import { api } from '../../services';

const cx = classNames.bind(styles);

function TVShows () {
    const [shows, changeShowsList] = useState([]);

    useEffect(() => {
        api.get(`discover/tv`).then((data) => {
            changeShowsList(data)
        })

    }, []);

    return (!shows.results) ? (
        'Loading...'
      ) : (
        <div className={cx('shows-wrapper')}>
            <h5>TV Shows</h5>
            <div className={cx('main-content')}>
                <Navigation />
                <MoviesList data={shows} target="tv" />
            </div>
        </div>
      );
}

export default TVShows;
