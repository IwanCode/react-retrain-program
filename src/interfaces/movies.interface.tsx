import { IPagination } from './pagination.interface';

export interface IMoviesRecomendation extends IPagination {
    results: IMoviesListItem[];
}

export interface IMoviesListItem {
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