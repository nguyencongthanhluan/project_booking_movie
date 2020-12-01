import React, { useEffect } from "react";
import "./../cinemaBook/cinemaBook.scss";
import { getHeThongRapId } from "./../../redux/actions/cinema";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CinemaBookRight = () => {
  const dispatch = useDispatch();
  // const { listDetail } = useSelector((state) => state.cinema);
  const { cinemaSystem } = useSelector((state) => state.cinema);
  const { cinemas } = useSelector((state) => state.cinemaBook);
  // const { maCumRap = "" } = listDetail[0];
  const { maHeThongRap = "" } = cinemas[0];
  useEffect(() => {
    dispatch(getHeThongRapId(maHeThongRap));
  }, []);

  const checkDateNow = () => {
    const date = new Date();
    var today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    console.log("today:", today);
    // var day = new Date("2020-11-14");
    var day = "2020-11-30";
    console.log("day:", day);
    if (today === day) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  const renderDetailFilm = () => {
    const date = new Date();
    var today =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return cinemaSystem.map((items, index) => {
      return items.lstCumRap.map((item, index) => {
        return item.danhSachPhim.map((phim, index) => {
          return (
            <div className="right_content pt-3" key={index}>
              <div className="right_info ">
                <img src={phim.hinhAnh} />
                <div className="right_item">
                  <span className="name_film">{phim.tenPhim}</span>
                  <span className="time">Số phút</span>
                </div>
              </div>

              <div className="right_time">
                <span className="item_2">2D</span>
                <>
                  {phim.lstLichChieuTheoPhim.map((time, index) => {
                    // time.ngayChieuGioChieu.substr(0, 10)
                    var da = new Date("2020-11-14");
                    if (time.ngayChieuGioChieu.substr(0, 10) === "2020-11-14") {
                      console.log("true");
                      return (
                        <Link
                          className="link_time"
                          key={index}
                          to={`/selectchair/${time.maLichChieu}`}
                        >
                          <span>{time.ngayChieuGioChieu.substr(11, 5)}</span>
                        </Link>
                      );
                    }
                  })}
                </>
              </div>
            </div>
          );
        });
      });
    });
  };

  return (
    <div className="cinema_right scroll">
      <button
        onClick={() => {
          checkDateNow();
        }}
      >
        Date
      </button>
      {renderDetailFilm()}
    </div>
  );

  // componentDidMount(){
  //     this.props.dispatch(listDetailFilm())
  // }
};

// const mapStateToProps=(state)=>{
//     return {
//         listDetail: state.cinema.listDetail|| {
//             maPhim: "",
//             tenPhim: "",
//             hinhAnh: "",
//             moTa: "",
//             ngayKhoiChieu: "",
//             trailer: "",
//             heThongRapChieu: [],
//         }
//     }
// }

export default CinemaBookRight;
