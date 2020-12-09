import Axios from "axios";
import React, { Component } from "react";

class Themnguoidung extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let item = this.state;
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: item,
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
    return (
      <div>
        <div
          className="modal fade"
          id="themnguoidung"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h3 className="text-center">THÊM NGƯỜI DÙNG</h3>

                  <div className="form-group">
                    <label>Tài khoản</label>
                    <input
                      type="text"
                      name="taiKhoan"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mật Khẩu</label>
                    <input
                      type="text"
                      name="matKhau"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Họ tên</label>
                    <input
                      type="text"
                      name="hoTen"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                      type="number"
                      name="soDt"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mr-1">Mã loại khách hàng </label>
                    <select
                      name="maLoaiNguoiDung"
                      onChange={(e) => this.handleChange(e)}
                    >
                      <option value="KhachHang">Khách Hàng</option>
                      <option value="QuanTri">Quản Trị</option>
                    </select>
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
}

export default Themnguoidung;
