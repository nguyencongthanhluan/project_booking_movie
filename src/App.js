import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import SignUp from "./pages/Signup/signup";
import SignIn from "./pages/Signin/signin";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createAction } from "./redux/actions";
import { connect } from "react-redux";
import DetailMovie from "./pages/Details/detail";
import SelectChair from "./pages/SelectChair/selectChair";
import BookChair from "./pages/BookChair/BookChair";

import { AdminTemplate } from "./pages/Admin/AdminTemplate";
import Quanlynguoidung from "./pages/Admin/quanlynguoidung/quanlynguoidung";
import Quanlyphim from "./pages/Admin/quanlyphim/quanlyphim";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/detail/:id" component={DetailMovie} />
          <Route exact path="/selectchair/:id" component={SelectChair} />
          <Route exact path="/bookChair" component={BookChair} />

          <AdminTemplate
            exact
            path="/admin/quanlynguoidung"
            component={Quanlynguoidung}
          />
          <AdminTemplate
            exact
            path="/admin/quanlyphim"
            component={Quanlyphim}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialsFromLocal = () => {
    const creStr = localStorage.getItem("credential");
    if (creStr) {
      this.props.dispatch(
        // parse json thành đối tượng javasript
        createAction("FETCH_THONGTIN_DANGNHAP", JSON.parse(creStr))
      );
    }
  };
  // chạy khi render giao diện: kiểm tra xem có tài khoản dưới local không ?
  componentDidMount() {
    this._getCredentialsFromLocal();
  }
}

export default connect()(App);
