import * as moviesConstants from "../Constants/MoviesContants";

// GET ALL MOVIES
export const moviesListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case moviesConstants.MOVIES_LIST_REQUEST:
      return {
        isLoadingg: true,
      };
    case moviesConstants.MOVIES_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload.movies,
        pages: action.payload.pages,
        page: action.payload.page,
        totalMovies: action.payload.totalMovies,
      };
    case moviesConstants.MOVIES_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
  }
};
