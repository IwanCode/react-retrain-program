import { GenresMovieInterface } from './genres.interface';
import { ICompanie } from './companies.interface';
import { TCastItem } from '../types/cast.type';
import { TCrewItem } from '../types/crew.type';

interface ICreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

interface ILastAirToDate {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    propduction_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

interface INetwork {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

interface ISeason {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface ITvItem {
    backdrop_path: string | null;
    created_by: ICreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: GenresMovieInterface[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: ILastAirToDate;
    name: string;
    next_episode_to_air: null;
    networks: INetwork[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ICompanie[];
    seasons: ISeason[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface ITvItemCredits {
    cast: Partial<TCastItem>[];
    crew: TCrewItem[];
    id: number;
}
