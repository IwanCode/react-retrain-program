export interface SearchActionInterface {
    searchValue: string,
    searchDirty: boolean,
    searchOpen: boolean
}

// export interface РeaderSearchInterface {

// }

// export interface SearchStateInterface {
//     search: SearchActionInterface
// }

export interface HeaderSearchInterface {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    original_title: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    media_type: string,
    first_air_date: string,
    origin_country: string[],
    name: string,
    original_name: string,
    known_for: any
}

