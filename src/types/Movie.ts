export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    genre_ids: number[];
    backdrop_path: string;
  }
  
export interface Genre {
  id: number;
  name: string;
}
  