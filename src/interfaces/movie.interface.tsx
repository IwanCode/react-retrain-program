import { GenresMovieInterface } from './genres.interface';
import { ICompanie } from './companies.interface';

type TSpokenLanguages = {
    iso_639_1: string;
    name: string;
}

type TProductionCountries = {
    iso_3166_1: string;
    name: string;
}

type TCastItem = {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number | null;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
}

type TCrewItem = {
    credit_id: string;
    departament: string;
    gender: number | null;
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
}

export interface IMovieItem {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | object;
    budget: number;
    genres: GenresMovieInterface[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: ICompanie[]
    production_countries: TProductionCountries[]
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: TSpokenLanguages[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieCredits {
    id: number;
    cast: TCastItem[];
    crew: TCrewItem[];
}
