import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './TVShow.module.scss';
import classNames from 'classnames/bind';
import { useAllFetch } from '../../hooks';
import Actors from '../../components/Actors';
import TMDPoster from '../../components/TMDPoster';
import { formatDate } from '../../services/date';
import { drawRatingCircle } from '../../services/helper';
// import Recomendation from '../../components/Recomendation';

const cx = classNames.bind(styles);

function TVShow() {
    const { id } = useParams();
    const { data, loading } = useAllFetch([`tv/${id}`, `tv/${id}/credits`]);

    useEffect(() => {
        if(!loading) {
            console.log('data', data);
          drawRatingCircle(data[0], 'ratingCircle');
        }
    }, [data, loading]);

    if (loading) {
        return 'loading...';
    }
    const show = data[0];
    const credits = data[1];

    return (
        <>
            <div className={cx('movie-header', 'movie-header-container')}>
                <div className={cx('movie-header-left')}>
                <figure>
                    <TMDPoster size={4} src={show.poster_path} alt={show.original_name + ' poster'} />
                    <figcaption>{show.name}</figcaption>
                </figure>
                </div>
                <div className={cx('movie-header-right')}>
                    <div className={cx('movie-header-title')}>
                        <div className={cx('movie-rating')}>
                            <div className={cx('movie-rating-circle')}>
                                <canvas id="ratingCircle" width="60" height="60"></canvas>
                                <div className={cx('movie-rating-votes')}>
                                    <span className={cx('movie-rating-votes_text')}>votes</span>
                                    <span className={cx('movie-rating-votes_count')}>{show.vote_count}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('movie-info-detail')}>
                            <h1>{show.name}</h1>
                            <span>{formatDate(show.name.first_air_date, 'mm/dd/yy')}</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={cx('movie-about')}>
                        <div>
                            <h3>Description:</h3>
                            {/* <p className={cx('movie-about-description')}>{show.overview}</p> */}
                        </div>
                        <div>
                            <h3>Details:</h3>
                            <p className={cx('movie-about-info')}>Seasons: <span>{show.number_of_seasons}</span></p>
                            <p className={cx('movie-about-info')}>Episodes: <span>{show.number_of_episodes}</span></p>
                        </div>
                        <div className={cx('movie-ganres')}>
                            <h3>Genres:</h3>
                            <ul>
                                {show.genres.map((genre, index) => {
                                    return (
                                        <li key={genre.id}>{index !== 0 && ', '}{genre.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={cx('movie-countries')}>
                            <h3>Language:</h3>
                            <ul>
                                {show.languages.map((language, index) => {
                                return (
                                    <li key={index}>{index !== 0 && ', '}{language}</li>
                                )
                                })}
                            </ul>
                        </div>
                        <hr></hr>
                        <div className={cx('movie-companies')}>
                            <h3>Production companies</h3>
                            <ul>
                                {show.production_companies.map(company => {
                                return company.logo_path && (
                                    <li key={company.id}>
                                    <div>
                                        <TMDPoster size={0} src={company.logo_path} alt={company.name + ' poster'} />
                                    </div>
                                    <span>{company.name}</span>
                                    </li>
                                )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <Actors data={credits.cast} items={5}/>
                {/* <Recomendation /> */}
                
            </div>      
        </>
    );

}

export default TVShow;