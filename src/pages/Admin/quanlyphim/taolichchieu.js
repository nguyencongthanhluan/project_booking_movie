import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../../redux/actions/index";
import moment from "moment";
class Taolichchieu extends Component {
  state = {
    maPhim: 0,
    maHeThongRap: "",
    maCumRap: "",
    maRap: 0,
    ngayChieuGioChieu: "",
    giaVe: 0,
    maNhom: "GP01",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "maHeThongRap") {
      Axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`,
      })
        .then((res) => {
          this.props.dispatch(createAction("CUM_RAP", res.data));
          this.setState({ maHeThongRap: value });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name === "maCumRap") {
      this.setState({ maCumRap: value });
    } else if (name === "maRap") {
      this.setState({ maRap: Number(value) });
    } else if (name === "ngayChieuGioChieu") {
      this.setState({
        ngayChieuGioChieu: moment(value).format("DD/MM/YYYY hh:mm:ss"),
      });
    } else if (name === "maPhim") {
      this.setState({ maPhim: Number(value) });
    } else {
      this.setState({ giaVe: Number(value) });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let item = this.state;
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
      method: "POST",
      data: item,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="taolichchieu"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h3 className="text-center">TẠO LỊCH CHIẾU</h3>

                  <div className="form-group">
                    <label>Mã phim</label>
                    <input
                      type="number"
                      name="maPhim"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hệ thống rạp</label>
                    <select
                      name="maHeThongRap"
                      onChange={(e) => this.handleChange(e)}
                    >
                      <option value="">Chọn hệ thống rạp</option>
                      {this.props.heThongRap.map((item, index) => {
                        return (
                          <option key={index} value={item.maHeThongRap}>
                            {item.tenHeThongRap}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cụm rạp</label>
                    <select
                      name="maCumRap"
                      onChange={(e) => this.handleChange(e)}
                    >
                      <option value="">Chọn cụm rạp</option>
                      {this.props.cumRap.map((item, index) => {
                        return (
                          <option key={index} value={item.maCumRap}>
                            {item.tenCumRap}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mã rạp</label>
                    <select name="maRap" onChange={(e) => this.handleChange(e)}>
                      <option value="">Chọn rạp</option>
                      {this.props.cumRap
                        .filter(
                          (cumrap) => cumrap.maCumRap === this.state.maCumRap
                        )
                        .map((item, index) => {
                          return item.danhSachRap.map((rap, id) => {
                            return (
                              <option key={id} value={rap.maRap}>
                                {rap.tenRap}
                              </option>
                            );
                          });
                        })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Ngày giờ chiếu</label>
                    <input
                      type="datetime-local"
                      name="ngayChieuGioChieu"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Giá vé</label>
                    <input
                      type="number"
                      name="giaVe"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="form-control btn btn-success my-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((res) => {
        this.props.dispatch(createAction("HE_THONG_RAP", res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => {
  return {
    heThongRap: state.reducerSystem.heThongRap,
    cumRap: state.reducerSystem.cumRap,
  };
};
export default connect(mapStateToProps)(Taolichchieu);
