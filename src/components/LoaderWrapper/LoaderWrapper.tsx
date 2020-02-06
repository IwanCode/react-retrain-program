import React from 'react';
import styles from './LoaderWrapper.module.scss';
import classNames from 'classnames/bind';

const ctx = classNames.bind(styles);

function LoaderWrapper () {
    return <div className={ctx('loader-wrapper')}>
        <div className={ctx('lds-ring')}><div></div><div></div><div></div><div></div></div>
    </div>;

}

export default LoaderWrapper