import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesWithSagas } from '../../actions/movies.action';
import { fetchGenres, fetchGenresWithSagas } from '../../actions/genres.action';
import MoviesList from '../../components/MoviesList';
import Navigation from '../../components/Navigation';
import Categories from '../../components/Categories';

function Genres ({ genres, movies, fetchMoviesWithSagas, fetchGenresWithSagas }) {
    const { search } = useLocation();
    const { page = '1' } = queryString.parse(search);
    const { id } = useParams();

    // Sagas approach
    useEffect(() => {
      fetchMoviesWithSagas({ url: `discover/movie?with_genres=${id}&page=${page}` });
    }, [
        id,
        page,
        fetchMoviesWithSagas
    ]);

    return (!movies.results) ? (
        'Loading genre movies...'
      ) : (
        <>
          <h5>Genres list</h5>
          <div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Genres);