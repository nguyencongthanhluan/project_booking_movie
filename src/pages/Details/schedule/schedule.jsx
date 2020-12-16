import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class Schedule extends Component {
  render() {
    const { cumRapChieu } = this.props.cumRap;
    return (
      <div>
        {cumRapChieu?.map((item, index) => (
          <div
            className="card text-left"
            key={index}
            style={{ overflowY: "auto", maxHeight: 250 }}
          >
            <div>
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
                      <NavLink
                        className="btn btn-light text-success mx-2"
                        key={index}
                        to={`/selectchair/${item.maLichChieu}`}
                      >
                        {item.ngayChieuGioChieu?.substr(11, 5)}
                      </NavLink>
                    ))
                : item.lichChieuPhim.map((item, index) => (
                    <NavLink
                      className="btn btn-light text-success mx-2"
                      key={index}
                      to={`/selectchair/${item.maLichChieu}`}
                    >
                      {item.ngayChieuGioChieu?.substr(11, 5)}
                    </NavLink>
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
