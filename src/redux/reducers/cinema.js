const initialState = {
  loading: true,
  listCinema: [],
  cinemaSystem: [],
  listDetail: [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 16099,
                  maRap: "467",
                  tenRap: "Rạp 7",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1314,
              tenPhim: "13 Reasons Why",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.jpg",
            },
          ],
          maCumRap: "bhd-star-cineplex-pham-hung",
          tenCumRap: "BHD Star Cineplex - Phạm Hùng",
          diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
        },
      ],
    },
  ],
  error: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LIST_CINEMA_SUCCESS":
      const _cinemaSystems = payload || [];
      return {
        ...state,
        cinemaSystem: _cinemaSystems,
        loading: false,
        error: "",
      };

    case "LIST_CINEMA_REQUEST":
      return { ...state, loading: true };
    case "LIST_CINEMA_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case "LIST_LOGO_SUCCESS":
      const _listCinema = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        listCinema: _listCinema,
      };

    case "LIST_CINEMA_DETAIL_REQUEST":
      return { ...state, loading: true };
    case "LIST_CINEMA_DETAIL_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "LIST_DETAIL_FILM":
      const _listDetail = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        listDetail: _listDetail,
      };

    default:
      return state;
  }
};
export default reducer;
