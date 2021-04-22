import { Cast, Crew } from "./credits";
import { MovieDetail } from "./movie";

export interface DetailsResponse {
    contact: MovieDetail
}

export interface InputDetailsInterface {
    cast: Cast[],
    director: Crew,
    writer: Crew,
    stars: string
}