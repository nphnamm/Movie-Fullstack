import * as moviesAPIs from "../APIs/MoviesService";
import * as moviesConstants from "../Constants/MoviesContants";

import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";
import { MOVIE_RANDOM_SUCCESS } from "./../Constants/MoviesContants";

//get all movies action
export const getAllMoviesAction =
  ({
    category = "",
    time = "",
    language = "",
    rate = "",
    year = "",
    search = "",
    pageNumber = "",
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: moviesConstants.MOVIES_LIST_REQUEST });
      const response = await moviesAPIs.getAllMoviesService(
        category,
        time,
        language,
        rate,
        year,
        search,
        pageNumber
      );
      dispatch({
        type: moviesConstants.MOVIES_LIST_SUCCESS,
        payload: response,
      });
      console.log("check data", response);
    } catch (error) {
      console.log(error);
      ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
    }
  };

//get random movies action
export const getRandomMoviesAction = () => async (dispatch) => {
  try {
    dispatch({ type: moviesConstants.MOVIE_RANDOM_REQUEST });

    const res = await moviesAPIs.getRandomMoviesService();
    dispatch({ type: moviesConstants.MOVIE_RANDOM_SUCCESS, payload: res });
  } catch (err) {
    ErrorsAction(err, dispatch, moviesConstants.MOVIE_RANDOM_FAIL);
  }
};

//get  movie by id action
export const getMovieByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: moviesConstants.MOVIE_DETAILS_REQUEST });
    let res = await moviesAPIs.getMovieByIdService(id);

    if (!res) {
      throw new Error("No Movie Found");
    }
    dispatch({ type: moviesConstants.MOVIE_DETAILS_SUCCESS, payload: res });
  } catch (e) {
    console.log("check error", e);
    ErrorsAction(e, dispatch, moviesConstants.MOVIE_RANDOM_FAIL);
  }
};

//get top rated movie action

export const getTopRatedMovieAction = () => async (dispatch) => {
  try {
    dispatch({ type: moviesConstants.MOVIE_TOP_RATED_REQUEST });
    const response = await moviesAPIs.getTopRatedMoviesService();
    dispatch({
      type: moviesConstants.MOVIE_TOP_RATED_SUCCESS,
      payload: response,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, moviesConstants.MOVIE_TOP_RATED_FAIL);
  }
};
