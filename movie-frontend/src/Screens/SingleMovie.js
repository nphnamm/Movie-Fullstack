import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MoviesData";
import Layout from "./../Layout/Layout";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "./../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import { BsCollectionFill } from "react-icons/bs";
import Title from "./../Components/Title";
import Movie from "../Components/Movie";
import ShareMovieModal from "../Components/Modals/ShareModal";

export default function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter(
    (movie) => movie.category === movie.category
  );
  console.log("check", movie);
  return (
    <Layout>
      <ShareMovieModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        {/*Rate*/}
        <MovieRates movie={movie} />
        {/*Related*/}
        <div className="my-16">
          <Title title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid:col-3 sm:grid-cols-2 gap-6">
            {RelatedMovies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
            {}
          </div>
        </div>
      </div>
    </Layout>
  );
}
