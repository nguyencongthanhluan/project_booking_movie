import { createAction } from ".";
import {
  getListCinemas,
  informationCinema,
  informationCinemaSystem,
  detailFilm,
} from "./../../Services/cinema";

export const getListCinema = () => {
  return (dispatch) => {
    informationCinema()
      .then((res) => {
        // console.log(res.data);
        dispatch(createAction("LIST_LOGO_SUCCESS", res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getHeThongRapId = (id) => (dispatch) => {
  // console.log("getHeThongRapId active");
  dispatch(createAction("LIST_CINEMA_REQUEST"));

  return getListCinemas(id)
    .then((res) => {
      console.log("getHeThongRapId ", res.data);
      const { data } = res;
      if (!data) {
        dispatch(createAction("LIST_CINEMA_FAILURE", { error: "data null" }));

        return;
      }
      dispatch(createAction("LIST_CINEMA_SUCCESS", data));
    })
    .catch((err) => {
      // console.log(err);
      dispatch(createAction("LIST_CINEMA_FAILURE", err));
    });
};

export const listDetailFilm = (id) => (dispatch) => {
  dispatch(createAction("LIST_CINEMA_DETAIL_REQUEST"));
  return detailFilm(id)
    .then((res) => {
      // console.log("ss", id);
      // console.log("cumrap: ", res.data);
      const { data } = res;
      if (!data) {
        dispatch(
          createAction("LIST_CINEMA_DETAIL_FAILURE", { error: "Data null" })
        );
        return;
      }

      dispatch(createAction("LIST_DETAIL_FILM", res.data));
    })
    .catch((err) => {
      dispatch(createAction("LIST_CINEMA_DETAIL_FAILURE", err));
    });
};
