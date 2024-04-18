import React, { useState } from "react";
import Title from "../Title";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MoviesData";
import { Autoplay, Navigation } from "swiper";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Stars";

function TopRates() {
  const [nextEl, setNextEl] = useState(0);
  const [prevEl, setPrevEl] = useState(0);
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  return (
    <div className="my-16">
      <Title title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate border border-border bg-dry roundedo overflow-hidden">
                <img
                  src={`/images/movies/${movie?.image}`}
                  alt="movie"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="px-4 flex-colo gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 ">
                <button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                  <FaHeart />
                </button>
                <Link
                  className="font-semibold text-xl trancuted line-clamp-2"
                  to={`/movie/${movie.name}`}
                >
                  {movie.name}
                </Link>
                <div className="flex gap-2 text-star">
                  <Rating value={movie.rate} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRates;
