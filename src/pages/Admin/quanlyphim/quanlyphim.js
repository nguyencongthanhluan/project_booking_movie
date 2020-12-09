import Axios from "axios";
import React, { Component } from "react";
import "./quanlyphim.scss";
import Suaphim from "./suaphim";
import Taolichchieu from "./taolichchieu";
import Themphim from "./themphim";
class Quanlyphim extends Component {
  state = {
    movielist: [],
    currentPage: 1,
    newsPerPage: 5,
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
  handleDelete = (maphim) => {
    Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`,
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
    const currentTodos = this.state.movielist
      .filter((movie) => {
        return (
          movie.tenPhim
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      })
      .slice(indexOfFirstNews, indexOfLastNews);

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.movielist.length / newsPerPage);
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
          <div className="mt-3" style={{ marginLeft: "10rem" }}>
            <ul id="page-numbers">
              {pageNumbers.map((number) => {
                if (this.state.currentPage === number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  );
                } else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage}>
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
              data-target="#modelId"
            >
              Thêm phim
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="row m-0 p-0 border border-dark font-weight-bolder bg-dark text-white text-center">
            <div className="col-2">Action</div>
            <div className="col-1">Mã phim</div>
            <div className="col-1">Tên phim</div>
            <div className="col-1">Hình ảnh</div>
            <div className="col-2">Mô tả</div>
            <div className="col-1">Trailer</div>
            <div className="col-1">Đánh giá</div>
            <div className="col-2">Ngày giờ chiếu</div>
            <div className="col-1">Mã nhóm</div>
          </div>
        </div>
        {currentTodos.map((item, index) => {
          return (
            <div className="row m-0 p-0 border border-dark" key={index}>
              <div className="col-2">
                <button
                  className="btn btn-warning m-2 border-dark"
                  data-toggle="modal"
                  data-target="#taolichchieu"
                >
                  Tạo lịch chiếu
                </button>
                <button
                  className="btn btn-primary m-2 border-dark"
                  data-toggle="modal"
                  data-target="#suaphim"
                >
                  Sửa
                </button>
                <button
                  className="btn btn-danger border-dark"
                  onClick={() => this.handleDelete(item.maPhim)}
                >
                  Xóa
                </button>
              </div>
              <div className="col-1">{item.maPhim}</div>
              <div className="col-1">{item.tenPhim}</div>
              <div className="col-1">
                <img src={item.hinhAnh} style={{ width: 80 }} />
              </div>
              <div className="col-2">{item.moTa.substr(0, 70) + "..."}</div>
              <div className="col-1">
                <a href={item.trailer} target="_blank">
                  trailer
                </a>
              </div>
              <div className="col-1">{item.danhGia}</div>
              <div className="col-2">{item.ngayKhoiChieu}</div>
              <div className="col-1">{item.maNhom}</div>
            </div>
          );
        })}
        <Themphim />
        <Suaphim />
        <Taolichchieu />
      </>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        this.setState({
          ...this.state,
          movielist: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Quanlyphim;
