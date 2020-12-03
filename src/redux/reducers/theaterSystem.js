const initialState = {
  heThongRap: [],
  cumRap: [],
  maCumRap: "",
  id: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "RENDER_CUM_RAP":
      return { ...state, cumRap: payload };
    case "RENDER_LICH_CHIEU_PHIM":
      return { ...state, id: payload };
    case "HE_THONG_RAP":
      return { ...state, heThongRap: payload };
    case "CUM_RAP":
      return { ...state, cumRap: payload };
    default:
      return state;
  }
};

export default reducer;
