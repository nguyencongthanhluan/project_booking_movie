import React, { Component } from "react";

class Quanlyphim extends Component {
  render() {
    return (
      <>
        <div>
          <form>
            <input type="text" />
          </form>
          <button className="btn btn-success mt-3">Thêm phim</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Action</th>
                <th>Mã phim</th>
                <th>Tên phim</th>
                <th>Bí danh</th>
                <th>Hình ảnh</th>
                <th>Mô tả</th>
                <th>Trailer</th>
                <th>Đánh giá</th>
                <th>Ngày giờ chiếu</th>
                <th>Mã nhóm</th>
              </tr>
            </thead>
            <tbody>
              {this.props.movielist.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button className="btn btn-success">lịch chiếu</button>
                      <button className="btn btn-primary">sửa</button>
                      <button className="btn btn-danger">xóa</button>
                    </td>
                    <td>{item.maPhim}</td>
                    <td>{item.tenPhim}</td>
                    <td>{item.biDanh}</td>
                    <td>
                      <img
                        src={item.hinhAnh}
                        style={{ width: 75, height: 100 }}
                      />
                    </td>
                    <td>{item.moTa.substr(0, 50) + "..."}</td>
                    <td>{item.trailer}</td>
                    <td>{item.danhGia}</td>
                    <td>{item.ngayKhoiChieu}</td>
                    <td>{item.maNhom}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Quanlyphim;
