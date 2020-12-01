import React, { Component } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../redux/actions";
import { userService } from "../../Services";

class Header extends Component {
  //
  removeCredentialsFromLocal = (values) => {
    userService
      .logOut(values)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("credential")
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  _handleLogOut= (event) => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("credential")
    // Remove the user object from the Redux store
    this.props.dispatch(
      createAction("LOGOUT_USER")
    )
  }
  render() {
    return (
      <div className="header">
        <div className="header_content">
          <nav className="navbar navbar-expand-md">
            <NavLink to="/home" className="navbar-brand" href="#">
              <img src="./image/web-logo.png" className="logo" />
            </NavLink>
            <button
              className="navbar-toggler bg-dark navbar-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav nav_content ml-auto mr-auto">
                <li className="nav-item">
                  <NavLink to="/#" className="nav-link" href="#">
                    Lịch Chiếu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/#" className="nav-link" href="#">
                    Cụm Rạp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/#" className="nav-link" href="#">
                    Tin Tức
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/#" className="nav-link" href="#">
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav">
                {this.props.credentials ? (
                  <div className="dropdown">
                    <li
                      className="nav-item dropdown-toggle  "
                      data-toggle="dropdown"
                    >
                      <span>Hi, {this.props.credentials.hoTen}</span>
                    </li>
                    <div className="dropdown-menu">
                    {this.props.credentials.hoTen
                        ? <button
                        className="dropdown-item"
                        onClick={this._handleLogOut}
                      >
                        Đăng xuất
                      </button>
                        : null
                      }
                      
                    </div>
                  </div>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink to="/signin" className="header_login" href="#" >
                        <img src="./image/login.png" className="login" />
                        Đăng nhập /
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/signup" className="header_login" href="#">
                        Đăng ký
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.removeCredentialsFromLocal()
  }
}
const mapStateToProps = (state) => {
  return {
    credentials: state.user.thongTinDangNhap,
   
  };
};


export default connect(mapStateToProps)(Header);
