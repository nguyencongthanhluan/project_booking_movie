import React, { useEffect } from "react";
import CinemaBookRight from "../cinemaBookRight/CinemaBookRight";
import "./../cinemaBook/cinemaBook.scss";
import { useSelector, useDispatch } from "react-redux";
import { listDetailFilm } from "./../../redux/actions/cinema";
import { getHeThongRapId } from "./../../redux/actions/cinema";

const CinemaBookLeft = (props) => {
  const dispatch = useDispatch();
  const { cinemas } = useSelector((state) => state.cinemaBook);
  const { cinemaSystem } = useSelector((state) => state.cinema);
  const { maHeThongRap = "" } = cinemas[0];

  // console.log("maHeThongRap: ", maHeThongRap);

  useEffect(() => {
    dispatch(getHeThongRapId(maHeThongRap));
  }, []);

  const handleDetailFilm = (id) => {
    dispatch(listDetailFilm(id));
    console.log("macumrap: ", id);
  };

  const renderCinema = () => {
    return (
      maHeThongRap &&
      cinemaSystem.map((item, index) => {
        return item.lstCumRap.map((items, index) => {
          return (
            <div key={index} onClick={() => handleDetailFilm(items)}>
              <div className="list_Cinema">
                <img src="https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg" />
                <div className="list_item">
                  <div className="d-inline">
                    <span className="name_cinema">{items.tenCumRap}</span>
                  </div>
                  <span className="address">{items.diaChi}</span>
                </div>
              </div>
              <hr />
            </div>
          );
        });
      })
    );
  };

  return (
    <div className="container cinema_left">
      <div className="row">
        <div className="col-sm-6 tab-content scroll">{renderCinema()}</div>
        <div className="col-sm-6 ">
          <CinemaBookRight />
        </div>
      </div>
    </div>
  );
};

export default CinemaBookLeft;
