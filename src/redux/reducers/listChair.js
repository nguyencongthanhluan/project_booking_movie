const initialState = {
  listChairs: [],
  infoFilm: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CHAIRLIST":
      return { ...state, listChairs: payload };
    case "SET_INFOR":
      return { ...state, infoFilm: payload };
    default:
      return state;
  }
};
