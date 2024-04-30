import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./Reducers/userReducers";
import * as Categories from "./Reducers/CategoriesReducers";
import * as Movies from "./Reducers/MoviesReducers";

const rootReducer = combineReducers({
  // Add your reducers here
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateProfile: User.userUpdateProfileReducer,
  userDeleteProfile: User.userDeleteProfileReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetFavoriteMovies: User.userGetFavoriteMoviesReducer,
  userDeleteFavoriteMovies: User.userDeleteFavoriteMoviesReducer,
  adminGetAllUsers: User.adminGetAllUserReducer,
  adminDeleteUser: User.adminDeleteUserReducer,

  //Category reducers
  categoryGetAll: Categories.getAllCategoriesReducer,
  categoryCreate: Categories.createCategoryReducer,
  categoryUpdate: Categories.updateCategoryReducer,
  categoryDelete: Categories.deleteCategoryReducer,

  //Movie reducers
  getAllMovies: Movies.moviesListReducer,
  getRandomMovies: Movies.moviesRandomReducer,
  getMovieById: Movies.movieDetailsReducer,
  getTopRatedMovies: Movies.movieTopRatedReducer,
});

//get userInfo from localStorage

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//initial State

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
