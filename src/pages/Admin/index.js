import React, { Component } from "react";
import Axios from "axios";
import Quanlynguoidung from "./quanlynguoidung";
import Quanlyphim from "./quanlyphim";

class Admin extends Component {
  state = {
    movielist: [],
    userlist: [],
  };
  renderMovieList = () => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          movielist: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderUserList = () => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          userlist: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <div
          style={{
            width: "100%",
            height: 100,
            backgroundColor: "oldlace",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src="/image/web-logo.png" />
          <div>
            <span style={{ lineHeight: "100px", cursor: "pointer" }}>
              Hi, Luan | Logout
            </span>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-2 p-0 m-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">
                  Quản lý phim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " data-toggle="tab" href="#menu1">
                  Quản lý người dùng
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10 p-0 m-0">
            <div className="tab-content">
              <div className="tab-pane active " id="home">
                <Quanlyphim movielist={this.state.movielist} />
              </div>
              <div className="tab-pane fade " id="menu1">
                <Quanlynguoidung userlist={this.state.userlist} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.renderMovieList();
    this.renderUserList();
  }
}

export default Admin;
