import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services';
import { useTMDSessionContext } from '../../context/TMDSessionContext';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import HeaderSearchModal from '../HeaderSearchModal';

const cx = classNames.bind(style);
const initialSearchState = {
  searchValue: '',
  searchDirty: false,
  searchOpen: true
};

function Header() {
  const [inFlight, setFlightStatus] = useState(false);
  const [searchState, changeSearchStatus] = useState(initialSearchState);
  const { isAuthenticated } = useTMDSessionContext();
  const containerRed = React.createRef();
  const requestToken = () => {
    setFlightStatus(true);
    api.get('/authentication/token/new').then((data) => {
      setFlightStatus(false);
      window.open(
        `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${window.location.protocol}//${window.location.host}/approve`,
        '_blank'
      );
    });
  };
  const searchToggle = (event) => {
    // const target = event.target;
    // console.log(target, target.hasClass('search-btn'));
    changeSearchStatus((prevState) => {
        return {
          ...prevState,
          searchOpen: !prevState.searchOpen
        };
    })
  };
  const onInputChange = (e) => {
    const target = e.target;
    changeSearchStatus((prevState) => {
      return {
        ...prevState,
        searchDirty: true,
        searchValue: target.value
      }
    });

    // Get search results
    // const { data, loading } = useFetch(`movie/${id}/recommendations`);


  }
  const onModalClick = (e) => {
    const target = e.target;
    
    if(target.contains(containerRed.current)) {
      changeSearchStatus(initialSearchState)
    }
  }


  return (
    <header className={cx('header')}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Search searchClick={searchToggle} data={searchState.searchOpen} />
          </li>
          <li className={cx('header-list-right')}>
            <Link to="/login">Login</Link>
          </li>
          {!isAuthenticated && (
            <li className={cx('header-list-right')}>
              <button
                className="waves-effect waves-light btn"
                onClick={requestToken}
                disabled={inFlight}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </nav>
      <HeaderSearchModal 
        searchOpen={searchState.searchOpen} 
        placeholder="Search for a movie"
        input={searchState.searchValue}
        inputHandler={onInputChange}
        modalHandler={onModalClick}
        refData={containerRed}
        inputDirty={searchState.searchDirty}
      />
    </header>
  );
}

export default Header;
