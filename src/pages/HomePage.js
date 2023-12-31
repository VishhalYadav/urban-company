import React from "react";
import UpperBody from "../components/Header/UpperBody";
import HomeServices from "../components/HomePageComponents/HomeServices";
import PopularServices from "../components/HomePageComponents/PopularServices";
import BestOffers from "../components/HomePageComponents/BestOffers";
import Footer from "../components/Footer/Footer";
const HomePage = (props) => {
  return (
    <React.Fragment>
      <UpperBody />
      <HomeServices />
      <PopularServices />
      <BestOffers />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
