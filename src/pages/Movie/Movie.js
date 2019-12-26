import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import TMDPoster from '../../components/TMDPoster';
import styles from './Movie.module.scss';
import classNames from 'classnames/bind';
import { formatDate } from '../../services/date';
import { getColor, numberWithCommas } from '../../services/helper';

const cx = classNames.bind(styles);

function Movie() {
  const { id } = useParams();
  const { data, loading } = useFetch(`movie/${id}`);

  useEffect(() => {
    if(!loading) {
      const canvas = document.getElementById('ratingCircle');
      const ctx = canvas.getContext('2d');
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const radius = 20;
      const startAngle = 1.5 * Math.PI;
      const endAngleKey = data.vote_average / 5 + 1.5;
      const endAngle = endAngleKey.toFixed(2) * Math.PI;
      const endAngleFull = 3.5 * Math.PI;
      const anticlockwise = false;
      const rating = data.vote_average * 10;
      const getTextStartAngle = (rating) => rating < 10 ? x - 4 : x - 9;
      const getPercentStartAngle = (rating) => rating < 10 ? 10 : 17;
      const yPath = y + 7;
      //Fill text in circle
      ctx.beginPath();
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(rating, getTextStartAngle(rating), yPath);
      //Fill % in text circle
      ctx.beginPath();
      ctx.font = 'bold 8px sans-serif';
      ctx.fillText('%', getTextStartAngle(rating) + getPercentStartAngle(rating), yPath - 8);
      // Draw circle background
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngleFull, anticlockwise);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.stroke();
      // Draw circle
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      ctx.lineWidth = 5;
      ctx.strokeStyle = getColor(1.1 - rating / 100);
      ctx.stroke();
    }
  }, [data, loading]);

  if (loading) {
    return 'loading...';
  }

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
    vote_count
  } = data;

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
      </div>      
    </>
  );
}

export default Movie;
