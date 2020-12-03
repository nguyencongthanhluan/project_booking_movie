import Axios from "axios";
import React, { Component } from "react";

class Suaphim extends Component {
  state = {
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
  };

  handleChange = (e) => {
    if (e.target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: form_data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert("Sửa phim thành công");
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
          id="suaphim"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h3 className="text-center">SỬA PHIM</h3>

                  <div className="form-group">
                    <label>Mã phim</label>
                    <input
                      name="maPhim"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tên phim</label>
                    <input
                      name="tenPhim"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Trailer</label>
                    <input
                      name="trailer"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hình ảnh</label>
                    <input
                      type="file"
                      name="hinhAnh"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mô tả</label>
                    <input
                      name="moTa"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mã nhóm</label>
                    <input
                      name="maNhom"
                      value="GP01"
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
}

export default Suaphim;
