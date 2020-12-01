import React from "react";
import {
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  TableHead,
} from "@material-ui/core";
import "./../SelectChair/selectChair.scss";
import { connect } from "react-redux";
import { deleteChair } from "./../../redux/actions/chairList";
import { bookTicketAction } from "./../../redux/actions/bookTicket";
// import history from "./../../configs/history";

const BookChair = (props) => {
  const deleteItem = (maGhe) => {
    props.deleteChair(maGhe);
  };
  //hiển thị thông tin đặt vé
  const renderBookChair = () => {
    return props.listBookChair.map((item, index) => {
      return (
        <TableBody key={index}>
          <TableRow>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{item.tenGhe}</TableCell>
            <TableCell align="center">{item.giaVe}</TableCell>
            <TableCell align="center">
              <button
                className="btn btn-success"
                onClick={() => deleteItem(item.maGhe)}
              >
                Hủy
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });
  };

  //Tổng tiền vé
  const totalAmount = () => {
    let sum = 0;
    for (let item of props.listBookChair) {
      if (item !== 0) {
        sum = sum + item.giaVe;
      }
    }
    //định dạng tiền
    sum = sum.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
    return sum;
  };
  return (
    <div>
      <div className="payment">
        <div className="payment_content">
          <h3>{totalAmount()} VND</h3>
          <hr />
          <div className="content_item">
            <span>Phim: </span>
            <span>{props.infoFilm.tenPhim}</span>
          </div>
          <hr />
          <div className="content_item">
            <span>Địa chỉ: </span>
            <span>{props.infoFilm.diaChi}</span>
          </div>
          <hr />
          <div className="content_item">
            <span>Thời gian: </span>
            <span>
              {props.infoFilm.ngayChieu} - {props.infoFilm.gioChieu} -{" "}
              {props.infoFilm.tenRap}
            </span>
          </div>
          <div className="p-3">
            <TableContainer>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      STT
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      Tên ghế
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      Giá vé
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 600 }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                {renderBookChair()}
              </Table>
            </TableContainer>
          </div>
          {/* data-toggle="modal" data-target="#myModal" */}
          <button
            type="submit"
            className="button_pay mb-3 mt-2"
            onClick={() => {
              if (localStorage.getItem("credential")) {
                //lấy ra userlogin từ local
                let userLogin = JSON.parse(localStorage.getItem("credential"));

                //backen cần
                let objBookTicket = {
                  // props.match.params.maLichChieu
                  maLichChieu: "40282",
                  danhSachVe: props.listBookChair,
                  taiKhoanNguoiDung: userLogin.taiKhoan,
                };
                document.getElementById("thongbao").innerHTML =
                  "Bạn chưa chọn ghế vui lòng chọn ghế!";
                for (let key in props.listBookChair) {
                  if (props.listBookChair[key].maGhe !== null) {
                    //dispatch
                    props.bookTicketAction(objBookTicket);
                    document.getElementById("thongbao").innerHTML = "";
                  }
                }
              } else {
                // history.push("/signin");
                // props.history.push("/signin");
                return "";
              }
            }}
          >
            MUA VÉ
          </button>
          <p
            id="thongbao"
            style={{ color: "red", fontSize: 20 }}
            className="py-3"
          ></p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    listBookChair: state.listBookChair.listBookChair || {
      tenGhe: "",
      giaVe: "",
      maGhe: "",
    },
    infoFilm: state.chair.infoFilm,
  };
};

const mapDispatchToProps = {
  deleteChair,
  bookTicketAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookChair);
