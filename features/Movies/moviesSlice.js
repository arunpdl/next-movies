import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { get } from "api/apiHelper";

export const loadPopularMovies = createAsyncThunk(
  "movies/loadPopularMovies",
  async (_, thunkApi) => {
    try {
      return await get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      );
    } catch (error) {
      return thunkApi.rejectWithValue({
        error: error?.response?.data?.status_message,
      });
    }
  }
);

export const loadMoviesGenre = createAsyncThunk(
  "movies/loadMoviesGenre",
  async (_, thunkApi) => {
    try {
      return await get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US
    `);
    } catch (err) {
      return thunkApi.rejectWithValue({
        error: error?.response?.data?.status_message,
      });
    }
  }
);

export const loadMovieDetail = createAsyncThunk(
  "movies/loadMovieDetail",
  async (movieId, thunkApi) => {
    try {
      const movieInfo = await get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      const movieCredits = await get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}
      `);

      return Promise.allSettled([movieInfo, movieCredits]).then((results) => {
        return {
          ...results[0].value,
          cast: results[1].value.cast.slice(0, 15),
          crew: results[1].value?.crew?.reduce((acc, eachCrew) => {
            return { ...acc, [eachCrew.job]: eachCrew };
          }),
        };
      });
    } catch (error) {
      return thunkApi.rejectWithValue({
        error: error?.response?.data?.status_message,
      });
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    loading: "idle",
    moviesGenres: [],
    movieDetail: {},
  },
  reducers: {},
  extraReducers: {
    [loadPopularMovies.pending]: (state) => {
      state.popularMovies = [];
      state.loading = "loading";
    },
    [loadPopularMovies.fulfilled]: (state, action) => {
      state.popularMovies = action.payload;
      state.loading = "loaded";
    },
    [loadPopularMovies.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
    [loadMoviesGenre.pending]: (state) => {
      state.moviesGenres = [];
      state.loading = "loading";
    },
    [loadMoviesGenre.fulfilled]: (state, action) => {
      state.moviesGenres = action.payload;
      state.loading = "loaded";
    },
    [loadMoviesGenre.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
    [loadMovieDetail.pending]: (state) => {
      state.movieDetail = {};
      state.loading = "loading";
    },
    [loadMovieDetail.fulfilled]: (state, action) => {
      state.movieDetail = action.payload;
      state.loading = "loaded";
    },
    [loadMovieDetail.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.payload.error;
    },
    [HYDRATE]: (state, action) => action.payload.movies,
  },
});

export const selectMovies = createSelector(
  (state) => ({
    popularMovies: state.movies.popularMovies,
    error: state.movies.error,
    loading: state.movies.loading,
    moviesGenres: state.movies.moviesGenres,
    movieDetail: state.movies.movieDetail,
  }),
  (state) => state
);

export default moviesSlice.reducer;
