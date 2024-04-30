import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transition relative rounded overflow-hidden">
        <Link to={`movie/${movie?._id}`} className="">
          <img
            src={
              movie?.image
                ? `/images/movies/${movie.image}`
                : "/images/movies/99.jpg"
            }
            alt={movie?.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className="font-semibold truncate">{movie?.name}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}
