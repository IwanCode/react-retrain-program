import React, { useState, useEffect } from 'react';
import styles from './TVShows.module.scss';
import classNames from 'classnames/bind';
import MoviesList from '../../components/MoviesList';
import Navigation from '../../components/Navigation';
import { api } from '../../services';
import { ITvDiscovery } from '../../interfaces';

const cx = classNames.bind(styles);

const TVShows =  () => {
    const [shows, setShows] = useState<ITvDiscovery>();

    useEffect(() => {
        api.get(`discover/tv`).then((data) => {
            setShows(data)
        })

    }, []);

    return (!shows) ? (
        <>'Loading...'</>
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
