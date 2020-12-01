import {createAction} from ".";
import {chairService} from "./../../Services";

export const listChair=(id)=>{
    return (dispatch)=>{
        chairService
            .listChair(id)
            .then((res)=>{
                console.log(res.data.danhSachGhe);
                console.log(res.data.thongTinPhim);
                dispatch(createAction("SET_CHAIRLIST",res.data.danhSachGhe))
                dispatch(createAction("SET_INFOR", res.data.thongTinPhim))
            })
            .catch((err)=>{
                console.log(err);
            })

    }
}
export const deleteChair = (maGhe) => dispatch =>{
    dispatch(createAction("DELETE_CHAIR", maGhe))
}
