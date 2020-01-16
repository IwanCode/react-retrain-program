import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import classNames from 'classnames/bind'

import { fetchMovies, fetchMoviesWithSagas } from '../../actions/movies.action';
// import { fetchGenres, fetchGenresWithSagas } from '../../actions/genres.action';

import MoviesList from '../../components/MoviesList';
import Navigation from '../../components/Navigation';
import styles from './PopularMovies.module.scss';

const cx = classNames.bind(styles);

function PopularMovies({ movies, fetchMoviesWithSagas }) {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);

  // Sagas approach
  useEffect(() => {
    fetchMoviesWithSagas({ url: `movie/popular?page=${page}` });
  }, [
    page,
    fetchMoviesWithSagas
  ]);

  return (!movies.results) ? (
    'Loading...'
  ) : (
    <>
      <h5>Popular list</h5>
      <div className={cx('main-content')}>
        <Navigation />
        <MoviesList data={movies} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  fetchMovies,
  fetchMoviesWithSagas,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);


