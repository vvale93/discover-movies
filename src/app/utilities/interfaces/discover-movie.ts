import { Movie } from "./movie";

export interface DiscoverMovie {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}
