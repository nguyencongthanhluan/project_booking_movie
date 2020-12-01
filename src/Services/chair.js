import axios from "axios";

class ChairService{
    listChair(id){
        return axios({
            method: "GET",
            // 18529
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
    }

    bookTicket(thongTinVe){
        return axios({
            method: "POST",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: thongTinVe,
            //định danh đăng nhập
            headers:{'Authorization': 'Bearer '+localStorage.getItem('t')}
           
        })
    }
}

export default ChairService;