import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import tất cả * với tên yup
import * as yup from "yup";
import { userService } from "../../Services";
import { Link } from "react-router-dom";
import "./signup.scss";
//schema
const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Vui lòng nhập tài khoản!"),
  matKhau: yup.string().required("* Vui lòng nhập mật khẩu!"),
  email: yup
    .string()
    .required("* Vui lòng nhập email!")
    .email("* Email không đúng"),
  hoTen: yup.string().required("* Vui lòng nhập họ tên!"),
  soDt: yup
    .string()
    .required("* Vui lòng nhập số điện thoại!")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("* Vui lòng chọn mã nhóm!"),
});
class SignUp extends Component {
  _handleSubmit = (values) => {
    // console.log(values);
    userService
      .signUp(values)
      .then((res) => {
        window.history.back();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

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
        <div className="bg-white w-50 mx-auto px-5 pb-3 rounded ">
          <h2 className="text-center pt-2">Đăng Ký</h2>
          <Formik
            // props: initialValues trả giá trị
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              hoTen: "",
              maNhom: "GP01",
            }}
            //formik hỗ trợ
            validationSchema={signupUserSchema}
            onSubmit={this._handleSubmit}
            //   formikProps: xây dựng các hàm onChange,... đều chứa hết trong formikProps
            render={(formikProps) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Tài Khoản: </label>
                  <Field
                    type="taikhoan"
                    className="form-control"
                    id="email"
                    placeholder="Tài khoản..."
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="taiKhoan" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Mật khẩu: </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder="Mật khẩu..."
                    name="matKhau"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="matKhau" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Họ tên:</label>
                  <Field
                    type="hoten"
                    className="form-control"
                    id="email"
                    placeholder="Họ tên..."
                    name="hoTen"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="hoTen" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email..."
                    name="email"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Số điện thoại:</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="sdt"
                    placeholder="Số điện thoại..."
                    name="soDt"
                    onChange={formikProps.handleChange}
                  />
                  <ErrorMessage name="soDt">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Mã nhóm:</label>
                  <Field
                    component="select" //sử dụng bắt buộc để formik hiểu
                    className="form-control"
                    name="maNhom"
                    onChange={formikProps.handleChange}
                  >
                    <option>GP01</option>
                    <option>GP02</option>
                    <option>GP03</option>
                  </Field>
                  <ErrorMessage name="maNhom" />
                </div>
                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                  <button
                    type="button"
                    className="btn btn-danger ml-2"
                    onClick={this._handleCancleUser}
                  >
                    <Link to="/" className="a">
                      Cancel
                    </Link>
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

export default SignUp;
