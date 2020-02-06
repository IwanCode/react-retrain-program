import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import classNames from 'classnames/bind';
import { GenresMovieInterface } from '../../interfaces';

const cx = classNames.bind(styles);

function Categories ({ data }: { data: GenresMovieInterface[]}) {
    
    return (
        <div>
            <h4>Genres</h4>
            <div className={cx('categories-container')}>
                <ul className={cx('categories-list')}>
                    { data.map((genre) => {
                        return (
                        <li
                            key={genre.id}
                        >
                            <Link to={`/genres/${genre.id}`} className={cx('navigation-btn')}>{genre.name}</Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
