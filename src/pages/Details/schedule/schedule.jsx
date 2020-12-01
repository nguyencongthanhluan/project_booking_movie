import React, { Component } from "react";
import { connect } from "react-redux";
class Schedule extends Component {
  render() {
    const { cumRapChieu } = this.props.cumRap;
    return (
      <div>
        {cumRapChieu?.map((item, index) => (
          <div className="card text-left" key={index}>
            <div>
              <img
                height="50px"
                className="card-img-top mr-3"
                src={item.hinhAnh}
                alt="hinhAnh"
              />
              <span style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.tenCumRap}
              </span>
            </div>
            <div className="card-body">
              {this.props.id
                ? item.lichChieuPhim
                    .filter(
                      (item) =>
                        item.ngayChieuGioChieu.substr(8, 2) === this.props.id
                    )
                    .map((item, index) => (
                      <button
                        className="btn btn-light text-success mx-2"
                        key={index}
                      >
                        {item.ngayChieuGioChieu?.substr(11, 5)}
                      </button>
                    ))
                : item.lichChieuPhim.map((item, index) => (
                    <button
                      className="btn btn-light text-success mx-2"
                      key={index}
                    >
                      {item.ngayChieuGioChieu?.substr(11, 5)}
                    </button>
                  ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cumRap: state.reducerSystem.cumRap,
    id: state.reducerSystem.id,
  };
};
export default connect(mapStateToProps)(Schedule);
