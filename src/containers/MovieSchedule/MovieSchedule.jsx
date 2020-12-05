import React, { Component } from "react";
import MovieScheduleItem from "../MovieScheduleItem/MovieScheduleItem";
import "./movieSchedule.scss";
import { connect } from "react-redux";
import { movieList } from "../../redux/actions/movieList";
import MoviePlaying from "../MoviePlaying/MoviePlaying";
class MovieSchedule extends Component {
  render() {
    return (
      <div className="pt-5">
        <section id="lichchieu" className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#home">
                Phim Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#menu1">
                Phim Sắp Chiếu
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active" id="home">
              <MoviePlaying />
            </div>
            <div className="tab-pane container fade" id="menu1">
              <MovieScheduleItem />
            </div>
          </div>
        </section>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(movieList());
  }
}

export default connect()(MovieSchedule);
