import Axios from "./Axios";

// ************* PUBLIC APIS ****************

// get all movies function

export const getAllMoviesService = async ({
  category,
  time,
  language,
  rate,
  year,
  search,
  pageNumber,
}) => {
  const { data } = await Axios.get(
    `/movies?category=${category}&time=${time}&language=${language}&`
  );
};
