import { IPagination } from './pagination.interface';

export interface ITvDiscovery extends IPagination {
    results: ITvListItem[];
}

export interface ITvListItem {
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: number[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
    title?: string;
}