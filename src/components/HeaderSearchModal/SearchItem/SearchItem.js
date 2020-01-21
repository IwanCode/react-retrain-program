import React, { useEffect } from 'react';
import HeaderSearchModel from '../../../models/HeaderSearchModel';
import TMDPoster from '../../TMDPoster';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import { Link } from 'react-router-dom';
import { drawRatingCircle } from '../../../services/helper';
import { connect } from 'react-redux';
import { searchAction } from '../../../actions/search.action';

const cx = classNames.bind(styles);
const config = {
    text: {
        fillStyle: "#ff00ff"
    },
    background: {
        strokeStyle: 'rgba(255,255,255,0.5)'
    }
}

function SearchItem ({data, searchAction}) {
    const searchItem = new HeaderSearchModel(data);
    let overview;
    useEffect(() => {
        drawRatingCircle(searchItem, `ratingCircle${searchItem.id}`, config);
    }, [searchItem])

    if (searchItem.overview) {
        overview = <p>{searchItem.overview.length > 72 ? searchItem.overview.slice(0, 72) + '...' : searchItem.overview}</p>;
    }

    return (
        <li className={cx('search-list-item')}>
            <div className={cx('search-list-item_poster')}>
                <Link to={`/movies/${searchItem.id}`} onClick={(e) => {
                    searchAction({
                        searchValue: '',
                        searchOpen: false
                    });
                }}>
                    <TMDPoster size={2} src={searchItem.poster_path} alt={searchItem.title + ' poster'} />
                </Link>
            </div>
            <div className={cx('search-list-item_details')}>
                <div className={cx('search-list-item_details-header')}>
                    <canvas id={`ratingCircle${searchItem.id}`} width="60" height="60"></canvas>
                    <h4>{searchItem.name ? searchItem.name : searchItem.title}</h4>
                </div>
                <div className={cx('search-list-item_details-body')}>
                    <div>Date: <span>{searchItem.release_date}</span></div>
                    {overview}
                </div>
            </div>
        </li>
    )
}

// export default SearchItem;

// const mapStateToProps = (state) => ({
//     headerSearch: state.test
//   });
  
  const mapDispatchToProps = {
    searchAction
  }
  
  export default connect(null, mapDispatchToProps)(SearchItem);