import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch, useAllFetch } from '../../hooks';
import TMDPoster from '../../components/TMDPoster';
import styles from './Movie.module.scss';
import classNames from 'classnames/bind';
import { formatDate } from '../../services/date';
import { numberWithCommas, drawRatingCircle } from '../../services/helper';
import Recomendation from '../../components/Recomendation';
import Actors from '../../components/Actors';
import ImdbRating from '../../components/ImdbRating';

const cx = classNames.bind(styles);

function Movie() {
  const { id } = useParams();
  const urls = [`movie/${id}`, `movie/${id}/credits`];
  const { data, loading } = useAllFetch([`movie/${id}`, `movie/${id}/credits`]);
  // const { data, loading } = useAllFetch(`movie/${id}`, `movie/${id}/credits`);
  // const { data, loading } = useFetch(`movie/${id}`);

  useEffect(() => {
    if(!loading) {
      console.log('data', data);
      drawRatingCircle(data[0], 'ratingCircle');
    }
  }, [data, loading]);

  if (loading) {
    return 'loading...';
  }

  const movie = data[0];
  const credits = data[1];

  const {
    title,
    poster_path, 
    tagline, 
    genres, 
    production_companies, 
    production_countries,
    budget,
    overview,
    popularity,
    spoken_languages,
    release_date,
    vote_count,
    imdb_id
  } = movie;

  return (
    <>
      <div className={cx('movie-header', 'movie-header-container')}>
        <div className={cx('movie-header-left')}>
          <figure>
            <TMDPoster size={4} src={poster_path} alt={title + ' poster'} />
            <figcaption>{tagline}</figcaption>
          </figure>
        </div>
        <div className={cx('movie-header-right')}>
          <div className={cx('movie-header-title')}>
            <div className={cx('movie-rating')}>
              <div className={cx('movie-rating-circle')}>
                <canvas id="ratingCircle" width="60" height="60"></canvas>
                <div className={cx('movie-rating-votes')}>
                  <span className={cx('movie-rating-votes_text')}>votes</span>
                  <span className={cx('movie-rating-votes_count')}>{vote_count}</span>
                </div>
                <div className={cx('movie-rating-imdb')}>
                  <ImdbRating id={imdb_id}/>
                </div>
              </div>
            </div>
            <div className={cx('movie-info-detail')}>
              <h1>{title}</h1>
              <span>{formatDate(release_date, 'mm/dd/yy')}</span>
            </div>
          </div>
          <hr></hr>
          <div className={cx('movie-about')}>
            <div>
              <h3>Description:</h3>
              <p className={cx('movie-about-description')}>{overview}</p>
            </div>
            <div>
              <h3>Details:</h3>
              <p className={cx('movie-about-info')}>Popularity: <span>{popularity}</span></p>
              <p className={cx('movie-about-info')}>Budget: <span>{numberWithCommas(budget)}$</span></p>
            </div>
            <div className={cx('movie-ganres')}>
              <h3>Genres:</h3>
              <ul>
                {genres.map((genre, index) => {
                  return (
                  <li key={genre.id}>{index !== 0 && ', '}{genre.name}</li>
                  )
                })}
              </ul>
            </div>
            <div className={cx('movie-countries')}>
              <h3>Countries:</h3>
              <ul>
                {production_countries.map((countrie, index) => {
                  return (
                    <li key={countrie.iso_3166_1}>{index !== 0 && ', '}{countrie.name}</li>
                  )
                })}
              </ul>
            </div>
            <div className={cx('movie-countries')}>
              <h3>Language:</h3>
              <ul>
                {spoken_languages.map((language, index) => {
                  return (
                    <li key={language.iso_639_1}>{index !== 0 && ', '}{language.name}</li>
                  )
                })}
              </ul>
            </div>
            <hr></hr>
            <div className={cx('movie-companies')}>
              <h3>Production companies</h3>
              <ul>
                {production_companies.map(company => {
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
        <Recomendation />
        
      </div>      
    </>
  );
}

export default Movie;
