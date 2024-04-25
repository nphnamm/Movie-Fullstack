import * as CategoriesConstants from "../Constants/CategoriesConstant";

import * as categoriesAPIs from "../APIs/CategoriesService";

import toast from "react-hot-toast";

import { ErrorsAction, tokenProtection } from "./../Protection";

// get all Categories action
export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST });
    const data = await categoriesAPIs.getCategoriesService();
    dispatch({
      type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    ErrorsAction(error, dispatch, CategoriesConstants.GET_ALL_CATEGORIES_FAIL);
    console.log("check error", error);
  }
};

// create category action

export const createCategoryAction = (title) => async (dispatch, getState) => {
  try {
    dispatch({ type: CategoriesConstants.CREATE_CATEGORY_REQUEST });
    const data = await categoriesAPIs.createCategoryService(
      title,
      tokenProtection(getState)
    );
    dispatch({ type: CategoriesConstants.CREATE_CATEGORY_SUCCESS });
    toast.success("Category created successfully");
  } catch (error) {
    ErrorsAction(error, dispatch, CategoriesConstants.CREATE_CATEGORY_FAIL);
  }
};

// update category action
export const updateCategoryAction =
  (id, title) => async (dispatch, getState) => {
    try {
      dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_REQUEST });
      const data = await categoriesAPIs.updateCategoryService(
        id,
        title,
        tokenProtection(getState)
      );
      dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_SUCCESS });
      toast.success("Category updated successfully");
    } catch (error) {
      ErrorsAction(error, dispatch, CategoriesConstants.UPDATE_CATEGORY_FAIL);
    }
  };

// delete category action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CategoriesConstants.DELETE_CATEGORY_REQUEST });
    const data = await categoriesAPIs.deleteCategoryService(
      id,
      tokenProtection(getState)
    );
    dispatch({
      type: CategoriesConstants.DELETE_CATEGORY_SUCCESS,
      payload: data,
    });
    toast.success("Category deleted successfully");
  } catch (error) {
    ErrorsAction(error, dispatch, CategoriesConstants.DELETE_CATEGORY_FAIL);
  }
};
