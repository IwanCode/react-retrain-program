import React, { useState, useEffect } from 'react';
import style from './HeaderSearchModal.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '../../hooks';
import { api } from '../../services';
import SearchItem from './SearchItem';

const cx = classNames.bind(style);

function HeaderSearchModal ({ searchOpen, placeholder, input, inputHandler, modalHandler, refData, inputDirty }) {
    //const { data, loading } = useFetch(`movie/${id}/recommendations`);
    const [searchList, changeSearchList] = useState([[], [], []]);
    const debouncedSearchTerm = useDebounce(input, 500);

    useEffect(() => {
        if(inputDirty && (debouncedSearchTerm === input) && input.length) {
            api.get(`search/multi?query=${input}`).then((data) => {
                const movies = data.results.filter(item => item.media_type === 'movie');
                const tvshows = data.results.filter(item => item.media_type === 'tv');
                const actors = data.results.filter(item => item.media_type === 'person');

                changeSearchList([movies, tvshows, actors]);
            });
        }
        else if (inputDirty && !input.length) {
            changeSearchList([[], [], []]);
        }

    }, [input, inputDirty, debouncedSearchTerm]);

    return (
        <div 
            className={cx('header-search', searchOpen ? 'header-search-active' : '')}
            onClick={(e) => modalHandler(e)}
        >
            <div className={cx('search-input-container')} ref={refData}>
                <input 
                    className={cx('search-input')} 
                    placeholder={placeholder} 
                    value={input}
                    onChange={(e) => inputHandler(e)} 
                />
                <div className={cx('search-dropdown')}>
                    { searchList.length ? 
                        searchList.map((categoryItem, index) => {
                            return (
                                 categoryItem.length ? 
                                    (<div key={index} className={cx('search-dropdown-category')}>
                                        <h3>{['Movies', 'TV Shows', 'Actors'][index]}</h3>
                                        <ul>
                                            {categoryItem.map(listItem => {
                                                return <SearchItem key={listItem.id} data={listItem} closeEvent={modalHandler}/>
                                            })}
                                        </ul>
                                    </div>) :
                                    ''
                            )
                        })
                        
                        : 'Type search value to see search results..'
                    }

                </div>
            </div>
        </div>
    );
}

export default HeaderSearchModal;