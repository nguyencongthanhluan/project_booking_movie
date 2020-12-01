import React, { useEffect } from "react";
import CinemaBookLeft from "../cinemaBookLeft/CinemaBookLeft";
import "./cinemaBook.scss";

import { useSelector, useDispatch } from "react-redux";
import { getHeThongRapId, getListCinema } from "./../../redux/actions/cinema";

const CinemaBook = (props) => {
  const dispatch = useDispatch();

  const handleSelectCinema = (key) => {
    dispatch(getHeThongRapId(key.maHeThongRap));
    console.log("Ten cum rap:", key);
  };

  const { listCinema } = useSelector((state) => state.cinema);
  useEffect(() => {
    dispatch(getListCinema());
  }, []);

  const renderLogo = () => {
    return listCinema.map((item, index) => {
      // console.log("logo:", item);
      return (
        <li
          className="item_movie"
          key={index}
          onClick={() => handleSelectCinema(item)}
        >
          <a className="">
            <img src={item.logo} />
          </a>
        </li>
      );
    });
  };

  return (
    <div className="container pb-5">
      <div className="col-sm-6 mx-auto pt-5 ">
        <ul className="logo_movie">{renderLogo()}</ul>
      </div>
      <div className="col-sm-12">
        <CinemaBookLeft />
      </div>
    </div>
  );

  // componentDidMount = () => {
  //     this.props.dispatch(listCinema())
  // }
};
// const mapStateToProps =(state)=>{
//     return {
//         listCinema: state.cinema.listCinema
//     }
// }
export default CinemaBook;
