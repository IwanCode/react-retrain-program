import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import classNames from 'classnames/bind'
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation () {
    const { search } = useLocation();
    const { page = '1' } = queryString.parse(search);

    return (
        <div className={cx('navigation-container')}>
            <ul className={cx('navigation-list')}>
                {page !== '1' ? (
                    <li>
                        <Link to={`/?page=${Number(page) - 1}`} className={cx('navigation-btn')}>Prev page</Link>
                    </li>
                ) : (
                    <li>
                        {/* <a href={null} disabled>Prev page</a> */}
                        <div className={cx('navigation-btn', 'disabled')}>Prev page</div>
                    </li>
                )}
                <li>
                    <Link to={`/?page=${Number(page) + 1}`} className={cx('navigation-btn')}>Next page</Link>
                </li>
            </ul>
        </div>
    )

}

export default Navigation;