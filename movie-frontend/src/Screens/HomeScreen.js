import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import PoppularMovies from "../Components/Home/PoppularMovies";
import Promos from "./../Components/Home/Promos";
import TopRates from "../Components/Home/TopRates";
function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-scrren px-2 mb-6">
        <Banner />
        <PoppularMovies />
        <Promos />
        <TopRates />
      </div>
    </Layout>
  );
}

export default HomeScreen;
