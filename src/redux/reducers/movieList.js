const initialState = {
  movieList: [],
  trailer: "",
  movieDetail: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_MOVIELIST":
      return { ...state, movieList: payload };
    case "SET_TRAILER":
      console.log("Trailer: ", payload);
      return { ...state, trailer: payload };
    case "FETCH_MOVIE_DETAIL":
      state.movieDetail = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
