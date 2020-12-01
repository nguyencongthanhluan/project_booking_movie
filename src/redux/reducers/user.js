const initialState = {
  thongTinDangNhap: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_THONGTIN_DANGNHAP":
      state.thongTinDangNhap = payload;
      return { ...state };
    case "LOGOUT_USER":
      return { ...state, thongTinDangNhap: null };
    default:
      return state;
  }
};
export default reducer;
