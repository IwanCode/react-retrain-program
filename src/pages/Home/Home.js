import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';
import { connect } from 'react-redux';
import classNames from 'classnames/bind'

import { fetchMovies, fetchMoviesWithSagas } from '../../actions/movies.action';
import { fetchGenres, fetchGenresWithSagas } from '../../actions/genres.action';
// import { useFetch } from '../../hooks';
// import MoviesList from '../../components/MoviesList';
// import Navigation from '../../components/Navigation';
import Categories from '../../components/Categories';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({ movies, genres, fetchMoviesWithSagas, fetchGenresWithSagas, children }) {
  
  useEffect(() => {
    fetchGenresWithSagas({ url: `genre/movie/list` });
  }, [fetchGenresWithSagas]);

  return (genres.loading) ? (
    'Loading...'
  ) : (
    <>
      <div className={cx('main-container')}>
        <Categories data={genres} />
        {children}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres
  };
};

const mapDispatchToProps = { 
  fetchMovies,
  fetchGenres,
  fetchMoviesWithSagas,
  fetchGenresWithSagas
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
