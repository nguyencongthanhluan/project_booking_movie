import React, { Component } from 'react';
import Slider from "react-slick";
import {connect} from "react-redux"
import { onChangeTrailer } from '../../redux/actions/movieList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from "react-router-dom"
import "./movieScheduleItem.scss"

class MovieScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }


   handleChange = (trailer) => {
    this.props.onChangeTrailer(trailer);
   }
    

  //  renderDateFilm =()=>{
  //   var today= new Date();
  //   var dateCurrent= today.getUTCFullYear()+"-"+ (today.getMonth()+1)+"-"+today.getDate();
  //   var d= today.getFullYear()
  //   return  this.props.listDate.filter((date)=>{
  //       if(date.ngayKhoiChieu > dateCurrent){
  //           console.log("phim sắp chiếu: ",date.ngayKhoiChieu); 
  //       }
  //       if(date.ngayKhoiChieu < dateCurrent){
  //           console.log("Phim đang chiếu: ", date.ngayKhoiChieu)
  //       }
  //   })
  // }



  renderMovieList = () => { 
    let today= new Date();
    let dateCurrent= today.getFullYear()+"-"+ (today.getMonth()+1)+"-"+today.getDay();
    return this.props.movieList.map((movie,index)=>{
      if(movie.ngayKhoiChieu > dateCurrent){
        return  (
            <div key={index} className="slide" >
                <div className="member_intro intro_1">
                  <img  src={movie.hinhAnh} className="image h-100"/>
                  <div className="intro_center">
                  </div>
                  <div className="img_center">
                     <img 
                      src="./image/play-video.png" 
                      data-toggle="modal"
                      data-target="#modelMovie" 
                      onClick={() => this.handleChange(movie.trailer)}
                      />
                      
                  </div>
                  <div className="nameFilm">
                      <span>{movie.tenPhim}</span>
                      <p>{movie.danhGia}</p>
                      <Link to={`/detail/${movie.maPhim}` } className="button_muave btn btn-success">MUA VÉ</Link>
                   </div>
                </div>
              </div>
                
            )
         }
      });
      
      };
    
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

      render() {
        const settings = {
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          
            ]
        };
        
        return (
          <div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.renderMovieList()}
            </Slider>
            <div style={{ textAlign: "center" }}>
              <button className="button_previous button_item" onClick={this.previous}>
                <ArrowBackIosIcon className="button_icon"/>
              </button>
              <button className="button_next button_item" onClick={this.next}>
                <ArrowForwardIosIcon className="button_icon" />
              </button>
            </div>
            {/* model */}
            <div className="modal fade" id="modelMovie">
              <div className="modal-dialog">
                <div className="modal-content">
                  <iframe
                    width={790}
                    height={515}
                    src={this.props.trailer}    
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

const mapStateToProps=(state)=>{
  return {
      movieList: state.movie.movieList,
      trailer: state.movie.trailer
  }
}

const mapDispatchToProps = {
  onChangeTrailer
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScheduleItem);