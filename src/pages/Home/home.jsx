import React, { Component } from "react";
import Carousel from "../../containers/Carousel/carousel";
import CinemaBook from "../../containers/cinemaBook/CinemaBook";
import CinemaBookLeft from "../../containers/cinemaBookLeft/CinemaBookLeft";
import Footer from "../../containers/Footers/Footer";
import Header from "../../containers/Headers/header";
import MovieSchedule from "../../containers/MovieSchedule/MovieSchedule";
import SelectChair from "../SelectChair/selectChair";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <MovieSchedule />
        <CinemaBook />
        {/* <CinemaBookLeft /> */}
        {/* <SelectChair /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
