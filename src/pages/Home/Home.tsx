import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import classNames from 'classnames/bind'

import { fetchGenres, fetchGenresWithSagas } from '../../actions/genres.action';
import { GenresMovieInterface } from '../../interfaces';
import Categories from '../../components/Categories';
import styles from './Home.module.scss';
import { api } from '../../services';

const cx = classNames.bind(styles);

interface HomeState {
  genres: {
    loading: boolean,
    genres: GenresMovieInterface[]
  }
}

const mapStateToProps = (state: HomeState) => {
  return {
    genresData: state.genres
  };
};

const mapDispatchToProps = {
  fetchGenres,
  fetchGenresWithSagas
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  children: JSX.Element
}

const Home = ({ genresData, fetchGenresWithSagas, children }: Props) => {
  
  useEffect(() => {
    fetchGenresWithSagas({ url: `genre/movie/list` });
    api.get(`http://localhost:4000/genres/movie/list`).then((data) => {
      // changeShowsList(data)
      console.log('data', data);
    })
  }, [fetchGenresWithSagas]);

  return (genresData.loading) ? (
    <>'Loading...'</>
  ) : (
    <>
      <div className={cx('main-container')}>
        <Categories data={genresData.genres} />
        {children}
      </div>
    </>
  );
}

export default connector(Home);
