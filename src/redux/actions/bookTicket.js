import { SwapCalls } from "@material-ui/icons";
import {createAction} from ".";
import {chairService} from "./../../Services";
import { listChair } from "./chairList";
import Swal from "sweetalert2"
export const bookTicketAction=(thongTinVe)=>{
    return (dispatch)=>{
        chairService
            .bookTicket(thongTinVe)
            .then((res)=>{
               console.log(res)
               dispatch(createAction("BOOK_TICKET_SUCCESS"))
               dispatch(listChair(thongTinVe.maLichChieu))
               Swal.fire('Thông báo', 'Đặt vé thành công', 'success')
            })
            .catch((err)=>{
                console.log(err);
                Swal.fire('Thông báo', 'Đặt vé thất bại', 'errors')
            })

    }
}