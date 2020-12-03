import React, { Fragment } from "react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAction } from "../../redux/actions";

export const AdminLayout = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const cre = JSON.parse(localStorage.getItem("credential"));
  const _handleLogOut = (event) => {
    event.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("credential");
    localStorage.removeItem("token");
    localStorage.removeItem("maloainguoidung");
    // Remove the user object from the Redux store
    dispatch(createAction("LOGOUT_USER"));
    history.push("/");
  };
  return (
    <div className="container-fluid p-0 m-0">
      <div
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "gold",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="/image/web-logo.png" />
        <div>
          <span
            onClick={_handleLogOut}
            style={{
              lineHeight: "100px",
              cursor: "pointer",
              fontSize: 20,
              marginRight: 20,
            }}
          >
            {cre ? "Hi, " + cre.taiKhoan : ""}
          </span>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-2 p-0 m-0" style={{ backgroundColor: "gold" }}>
          <ul className="flex" style={{ listStyle: "none", marginTop: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <NavLink
                to="/admin/quanlyphim"
                activeStyle={{
                  fontWeight: "bolder",
                  color: "red",
                }}
                style={{ textDecoration: "none" }}
              >
                Quản lý phim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/quanlynguoidung"
                activeStyle={{
                  fontWeight: "bolder",
                  color: "red",
                }}
                style={{ textDecoration: "none" }}
              >
                Quản lý người dùng
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-10 p-0 m-0">{props.children}</div>
      </div>
    </div>
  );
};

export const AdminTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        if (localStorage.getItem("credential")) {
          if (localStorage.getItem("maloainguoidung") === "QuanTri") {
            return (
              <AdminLayout>
                <props.component {...propsComponent} />
              </AdminLayout>
            );
          } else {
            return <Redirect to="/" />;
          }
        }
        return <Redirect to="/signin" />;
      }}
    />
  );
};
