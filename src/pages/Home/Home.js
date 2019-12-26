import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import classNames from 'classnames/bind'

import { fetchMovies, fetchMoviesWithSagas } from '../../actions/movies.action';
import { fetchGenres, fetchGenresWithSagas } from '../../actions/genres.action';
// import { useFetch } from '../../hooks';
import MoviesList from '../../components/MoviesList';
import Navigation from '../../components/Navigation';
import Categories from '../../components/Categories';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({ movies, genres, fetchMoviesWithSagas, fetchGenresWithSagas }) {
  const { search } = useLocation();
  const { page = '1' } = queryString.parse(search);
  const activeUrl = 'movie/popular';

  // Context approach
  // const { data, loading } = useFetch(`movie/popular?page=${page}`);

  // Thunk approach
  // useEffect(() => {
  //   fetchMovies({ url: `movie/popular?page=${page}` });
  // }, [page, fetchMovies]);

  // Sagas approach
  useEffect(() => {
    fetchMoviesWithSagas({ url: `${activeUrl}?page=${page}` });
    fetchGenresWithSagas({ url: `genre/movie/list` });
  }, [
    page, 
    activeUrl,
    fetchMoviesWithSagas, 
    fetchGenresWithSagas
  ]);

  return (movies.loading || genres.loading) ? (
    'Loading...'
  ) : (
    <>
      <Categories data={genres}/>
      <div className={cx('main-content')}>
        <Navigation />
        <MoviesList data={movies} />
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
