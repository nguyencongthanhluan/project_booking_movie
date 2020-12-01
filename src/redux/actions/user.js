import { createAction } from ".";
import { userService } from "./../../Services";
const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        console.log(res);
        dispatch(createAction("FETCH_THONGTIN_DANGNHAP", res.data));
        // lưu xuống localstorage
        localStorage.setItem("credential", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
export default login;
