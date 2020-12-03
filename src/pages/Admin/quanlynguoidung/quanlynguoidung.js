import Axios from "axios";
import React, { Component } from "react";
import "./quanlynguoidung.scss";
import Suanguoidung from "./suanguoidung";
import Themnguoidung from "./themnguoidung";
class Quanlynguoidung extends Component {
  state = {
    userList: [],
    currentPage: 1,
    newsPerPage: 100,
    search: "",
  };
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };
  changeSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  handleDelete = (taikhoan) => {
    Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = this.state.userList
      .filter((movie) => {
        return (
          movie.taiKhoan
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .slice(indexOfFirstNews, indexOfLastNews);

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.userList.length / newsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return (
      <>
        <div className="d-flex">
          <form style={{ paddingTop: 10, paddingLeft: 10 }}>
            <input
              className="p-2"
              name="search"
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={(event) => this.changeSearch(event)}
            />
          </form>
          <div className="my-3" style={{ marginLeft: "10rem" }}>
            <ul id="page-numbers">
              {pageNumbers.map((number) => {
                if (this.state.currentPage === number) {
                  return (
                    <li
                      key={number}
                      id={number}
                      className="active"
                      style={{ marginBottom: 5 }}
                    >
                      {number}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={number}
                      id={number}
                      onClick={this.chosePage}
                      style={{ marginBottom: 5 }}
                    >
                      {number}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginTop: 10,
              marginRight: 10,
            }}
          >
            <button
              className="btn btn-success border-dark"
              data-toggle="modal"
              data-target="#themnguoidung"
            >
              Thêm người dùng
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="row m-0 p-0 border border-dark font-weight-bolder bg-dark text-white text-center">
            <div className="col-2">Action</div>
            <div className="col-2">Tài khoản</div>
            <div className="col-2">Họ tên</div>
            <div className="col-3">Email</div>
            <div className="col-2">Số ĐT</div>
            <div className="col-1">MLND</div>
          </div>
        </div>
        {currentTodos.map((item, index) => {
          return (
            <div className="row m-0 p-0 border border-dark" key={index}>
              <div className="col-2">
                <button
                  className="btn btn-primary m-2 border-dark"
                  data-toggle="modal"
                  data-target="#suanguoidung"
                >
                  Sửa
                </button>
                <button
                  className="btn btn-danger border-dark"
                  onClick={() => this.handleDelete(item.taiKhoan)}
                >
                  Xóa
                </button>
              </div>
              <div className="col-2">{item.taiKhoan}</div>
              <div className="col-2">{item.hoTen}</div>
              <div className="col-3">{item.email}</div>
              <div className="col-2">{item.soDt}</div>
              <div className="col-1">{item.maLoaiNguoiDung}</div>
            </div>
          );
        })}
        <Themnguoidung />
        <Suanguoidung />
      </>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    })
      .then((res) => {
        this.setState({
          ...this.state,
          userList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Quanlynguoidung;
