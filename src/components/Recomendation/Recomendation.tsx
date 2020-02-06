import React from 'react';
import classNames from 'classnames/bind';
import styles from './Recomendation.module.scss';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import TMDPoster from '../TMDPoster';
import SlickSlider from '../SlickSlider';
import { Link } from 'react-router-dom';
import { moviesRecomendationInterface } from '../../interfaces';

const cx = classNames.bind(styles);

function Recomendation () {
    const { id } = useParams();
    const { data, loading }: {
        data: moviesRecomendationInterface,
        loading: boolean
    } = useFetch(`movie/${id}/recommendations`);

    if (loading) {
        return <>'Recomendation list loading..'</>;
    }

    const { results } = data;
    
    return (
        <div className={cx('recomendation-container')}>
            <h5>Recommendations</h5>
            <div className={cx('recomendation-list-views')}>
                <SlickSlider>
                    {results.map( item => {
                        return (
                            <div 
                                key={item.id}
                                className={cx('recomendation-list-item')}
                            >
                                <Link to={`/movies/${item.id}`}>
                                    <TMDPoster size={4} src={item.backdrop_path} alt={item.title + ' poster'} />
                                </Link>
                                <div className={cx('recomendation-item-description', 'star-coverage')}>
                                    {item.vote_average}
                                    <span>{item.original_title}</span>
                                </div>
                            </div>
                        );
                    })}

                </SlickSlider>
            </div>

        </div>
    )
}


export default Recomendation;
