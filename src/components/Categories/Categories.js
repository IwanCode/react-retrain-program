import React from 'react';
// import styles from './Categories.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

function Categories ({ data }) {
    console.log('data', data);
    return (
        <div>
            <h4>Genres</h4>
            <ul>
                { data.genres.map((genre) => {
                    return (
                    <li key={genre.id}>{genre.name}</li>
                    )
                })}
                <li>category</li>
            </ul>
        </div>
    )
}

export default Categories;
