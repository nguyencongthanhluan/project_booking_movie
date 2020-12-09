import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user";

class SignIn extends Component {
  render() {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="bg-white w-25 h-75 mx-auto px-5 pb-3 rounded pt-5">
          <h2 className="text-center pt-2">Đăng Nhập</h2>
          <Formik
            // props: initialValues trả giá trị
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            onSubmit={(values) => {
              //dispatch lên server
              this.props.dispatch(login(values));

              console.log(values);
            }}
            //   formikProps: xây dựng các hàm onChange,... đều chứa hết trong formikProps
            render={({ handleChange }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Tài Khoản: </label>
                  <Field
                    type="taikhoan"
                    className="form-control"
                    id="email"
                    placeholder="Tài khoản..."
                    name="taiKhoan"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Mật khẩu: </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder="Mật khẩu..."
                    name="matKhau"
                    onChange={handleChange}
                  />
                  <ErrorMessage name="matKhau" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success ">
                    Submit
                  </button>
                  <button type="button" className="btn btn-danger ml-2">
                    <NavLink to="/" className="a">
                      Quay lại trang chủ
                    </NavLink>
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    creadentials: state.user.thongTinDangNhap,
  };
};

export default connect(mapStateToProps)(SignIn);
