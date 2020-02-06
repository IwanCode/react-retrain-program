import { paginationInterface } from './pagination.interface';

export interface moviesRecomendationInterface extends paginationInterface {
    results: moviesListItemInterface[]
}

export interface moviesListItemInterface {
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    adult: boolean;
    release_date: string;
    genre_ids: number[];
    original_title: string;
    original_language: string;
    vote_count: number;
    video: boolean;
    title: string;
}