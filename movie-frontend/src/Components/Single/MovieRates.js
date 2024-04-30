import React, { useState } from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import Rating from "./../Stars";
import Title from "./../Title";
import Message, { Select } from "../UserInputs";
import { UsersData } from "../../Data/UsersData";
import { Empty } from "./../Notifications/Empty";

export default function MovieRates({ movie }) {
  const Ratings = [
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    },
  ];
  const [rating, setRating] = useState(0);
  console.log("check comment", movie?.reviews);
  return (
    <div className="my-12">
      <Title title="Reviews" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20">
        {/*write review*/}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-text font-semibold">
            Review "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write a review for this movie. It will be posted on this page. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.Done
          </p>
          <div className="text-sm w-full">
            <Select
              label="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
          </div>
          {/*Message*/}
          <Message label="Message" placeholder="Make it short and sweet..." />
          {/*Submit Button*/}
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded ">
            Submit
          </button>
        </div>
        {/*reviews*/}
        <div className="col-span-3 flex w-full flex-col gap-6">
          <h3 className="text-xl text-text font-semibold ">
            Reviews ({movie?.numberOfReviews})
          </h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            {movie?.reviews?.length > 0 ? (
              movie?.reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border  border-gray-800 rounded-lg"
                >
                  <div className="col-span-2 bg-main hidden md:block">
                    <img
                      src={
                        review?.userImage
                          ? `/images/${review.userImage}`
                          : "/images/user.png"
                      }
                      alt={review?.userName}
                      className="w-full h-24 rounded object-cover"
                    />
                  </div>
                  <div className="col-span-7 flex flex-col gap-2">
                    <h2>{review?.userName}</h2>
                    <p className="text-xs leading-6 font-medium text-text">
                      {review?.comment}
                    </p>
                  </div>
                  {/*Rates*/}
                  <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                    <Rating value={review?.rating} />
                  </div>
                </div>
              ))
            ) : (
              <Empty message={`Be First to rate "${movie?.name}"`} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
