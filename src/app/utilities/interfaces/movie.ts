import { Genre } from "./genre";

export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface MovieDetail {
    adult: boolean
    backdrop_path: string | null,
    belongs_to_collection: object | null,
    budget: number
    genres: Genre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: SpokenLanguages[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface ProductionCompanies {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string
}

export interface ProductionCountries {
    iso_3166_1: string,
    name: string
}

export interface SpokenLanguages {
    iso_639_1: string,
    name: string
}