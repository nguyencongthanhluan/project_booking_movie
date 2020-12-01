import axios from "axios";
class MovieService{
    movieList(){
        return axios({
            method:"GET",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        });
    }
    fetchMovieDetail(id){
        return axios({
            method:"GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            // url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`

        })
    }
}
export default MovieService;

