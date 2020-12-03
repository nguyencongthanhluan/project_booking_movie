import { createAction } from ".";
import { userService } from "./../../Services";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction("FETCH_THONGTIN_DANGNHAP", res.data));
        // lưu xuống localstorage
        localStorage.setItem("credential", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("maloainguoidung", res.data.maLoaiNguoiDung);
        window.history.back();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
