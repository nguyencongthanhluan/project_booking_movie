import React from "react";
import "./selectChair.scss";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";
import { useState, useEffect } from "react";
import BookChair from "../BookChair/BookChair";
import { useSelector, useDispatch } from "react-redux";
import { listChair } from "./../../redux/actions/chairList";
const SelectChair = (props) => {
  // const [listChairs, setListChair]= useState([])
  const dispatch = useDispatch();
  const { infoFilm, listChairs } = useSelector((state) => state.chair);
  const { listBookChair } = useSelector((state) => state.listBookChair);

  const handleChoseChair = (ghe) => {
    dispatch({
      type: "CHOOSE_CHAIR",
      payload: ghe,
    });
  };

  const renderChair = () => {
    return listChairs.map((ghe, index) => {
      let cssGhe = "";
      let disabled = false;
      if (ghe.loaiGhe === "Vip") {
        cssGhe = "cssGheVip";
      }
      if (ghe.daDat) {
        cssGhe = "cssGheDaDat";
        disabled = true;
      }
      let indexGheDangDat = listBookChair.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (indexGheDangDat !== -1) {
        cssGhe = "cssGheDangChon";
      }
      return (
        <>
          <button
            id="chon_Ghe"
            disabled={disabled}
            className={`ghe ${cssGhe}`}
            key={index}
            onClick={() => {
              handleChoseChair(ghe);
            }}
          >
            {ghe.tenGhe}
          </button>
          {/* Mỗi hàng có 16 ghế */}
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </>
      );
    });
  };
  const { initialMinute = 5, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (seconds === 0 && minutes === 0) {
        alert("Hết thời gian đặt vé");
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    //maLichChieu 40282
    // props.match.params.id
    dispatch(listChair(props.match.params.id));
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 pb-3">
            <div className="container">
              <div className="select_header ">
                <div className="selectCinema">
                  <p>Rạp đang chọn</p>
                  <h4>{infoFilm.tenRap}</h4>
                </div>
                <div className="time">
                  <p>Thời gian giữ ghế</p>

                  <div>
                    {minutes === 0 && seconds === 0 ? null : (
                      <h4>
                        {" "}
                        {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                      </h4>
                    )}
                  </div>
                </div>
              </div>
              <div className="screens">
                <div className="screens_name">
                  <img src="/image/screen.png" />
                </div>
                <div
                  className="screens_chairlist"
                  style={{ paddingLeft: 40, paddingRight: 40 }}
                >
                  {renderChair()}
                </div>
              </div>
              <div className="note_chair">
                <span className="note_item">
                  <EventSeatRoundedIcon
                    className="chair_item"
                    style={{ color: "gray" }}
                  />
                  <span className="content_chair">Ghế thường</span>
                </span>
                <span className="note_item">
                  <EventSeatRoundedIcon
                    className="chair_item"
                    style={{ color: "green" }}
                  />
                  <span className="content_chair">Ghế đang chọn</span>
                </span>
                <span className="note_item">
                  <EventSeatRoundedIcon
                    className="chair_item"
                    style={{ color: "red" }}
                  />
                  <span className="content_chair">Đã có người chọn</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <BookChair />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectChair;
