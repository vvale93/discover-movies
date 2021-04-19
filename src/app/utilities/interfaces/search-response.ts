import { Movie } from "./movie";

export interface SearchResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}