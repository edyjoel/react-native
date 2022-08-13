import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInteface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing')
    const popularPromise = movieDB.get<MovieDBResponse>('/popular')
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated')
    const upomingPromise = movieDB.get<MovieDBResponse>('/upcoming')

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upomingPromise
    ])

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results
    })
    setIsLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])


  return {
    ...moviesState,
    isLoading
  }
};