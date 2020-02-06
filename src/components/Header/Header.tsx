import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services';
import { useTMDSessionContext } from '../../context/TMDSessionContext';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from '../Search';
import HeaderSearchModal from '../HeaderSearchModal';
import { connect, ConnectedProps } from 'react-redux';
import { searchAction } from '../../actions/search.action';
import { initialSearchState } from '../../constants/initialSearch';
import { SearchActionInterface } from '../../interfaces';

const cx = classNames.bind(style);

interface RootState {
  search: SearchActionInterface
}

const mapStateToProps = (state: RootState) => ({
  headerSearch: state.search
});

const mapDispatchToProps = {
  searchAction
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;

const Header = ({ searchAction, headerSearch } : Props) => {
  const [inFlight, setFlightStatus] = useState(false);
  const { isAuthenticated } = useTMDSessionContext() as any;
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

  const searchToggle = (event: InputEvent) => {
    searchAction({
      searchValue: '',
      searchOpen: !headerSearch.searchOpen
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    
    searchAction({
      searchDirty: true,
      searchValue: target.value
    });

  }
  const onModalClick = (e: React.MouseEvent<HTMLElement> | any) => {
    const target = e.target;
    
    if(target.contains(containerRed.current)) {
      searchAction(initialSearchState)
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
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Search searchClick={searchToggle} data={headerSearch.searchOpen} />
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
        searchOpen={headerSearch.searchOpen} 
        placeholder="Search for a movie"
        input={headerSearch.searchValue}
        inputHandler={onInputChange}
        modalHandler={onModalClick}
        refData={containerRed}
        inputDirty={headerSearch.searchDirty}
      />
    </header>
  );
}

export default connector(Header);
