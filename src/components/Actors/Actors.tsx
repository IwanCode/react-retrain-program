import React from 'react';
import classNames from 'classnames/bind';
import style from './Actors.module.scss';
import TMDPoster from "../TMDPoster";
import { CastInterface } from '../../interfaces';

const cx = classNames.bind(style);

function Actors ({data, items}: {data: CastInterface[], items: number}) {
    const actorsList = data.slice(0, items);

    return (
        <div className={cx('actors-container')}>
            <h5>Actors list</h5>
            <ul className={cx('actors-list-views')}>
                {actorsList.map( item => {
                    return (
                        <li 
                            key={item.id}
                            className={cx('actors-list-item')}
                        >
                            <TMDPoster size={3} src={item.profile_path} alt={item.name + ' poster'} />
                            <div className={cx('actors-item-description')}>
                                <p>{item.name}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default Actors;
