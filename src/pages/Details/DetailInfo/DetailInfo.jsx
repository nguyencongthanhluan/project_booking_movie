import React, { Component } from 'react';
import "./style.scss"
import {connect} from "react-redux"
class DetailInfo extends Component {
    render() {
        return (
            <div className="container my-3"  style={{ backgroundColor: "bisque", height: 500 }}>
                <div className="row detail">
                    <div className="col-sm-6">
                        <div className="detail_info">
                             <div className="item_1">
                                <span className="tieude">Tên phim: </span>
                                <span>{this.props.movieDetails.tenPhim}</span>
                            </div>
                            <div className="item_1">
                                <span className="tieude">Ngày công chiếu: </span>
                                <span>{this.props.movieDetails.ngayKhoiChieu.substr(0, 10)}</span>
                            </div>
                            <div className="item_1">
                                <span className="tieude">Định dạng: </span>
                                <span>2D/Digital</span>
                            </div>
                           
                           
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="detail_content">
                            <p className="tieude">Nội dung: </p>
                            <p>{this.props.movieDetails.moTa}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      // nếu movieDetail ban đầu null thì gắn mảng rỗng
      movieDetails: state.movie.movieDetail || {
        maPhim: "",
        tenPhim: "",
        hinhAnh: "",
        moTa: "",
        ngayKhoiChieu: "",
        trailer: "",
        heThongRapChieu: [],
      },
    };
  };
export default connect(mapStateToProps) (DetailInfo);