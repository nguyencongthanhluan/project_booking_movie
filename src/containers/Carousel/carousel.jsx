import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <div className="carousel_img">
              <img src="./image/slider3.jpg" alt="Los Angeles" />
              <div className="carousel_video">
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#myModal"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src="./image/slider2.jpg" alt="Chicago" />
              <div className="carousel_video">
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#myModal"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src="./image/slider1.png" alt="New York" />
              <div className="carousel_video">
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#myModal"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src="./image/slider4.png" alt="" />
              <div className="carousel_video">
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#myModal"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="carousel_img">
              <img src="./image/slider5.jpg" alt="" />
              <div className="carousel_video">
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#myModal"
                />
              </div>
            </div>
          </div>
        </Slider>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <iframe
                width={790}
                height={515}
                src="https://www.youtube.com/embed/dsOSmQl2yA8"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
