const initialState = {
    listBookChair:[],
}

const reducer =  (state = initialState, { type, payload }) => {
    switch (type) {
        case "CHOOSE_CHAIR":
            let listChairUpdate= [...state.listBookChair];
            
            let index = listChairUpdate.findIndex(
                (chair) => chair.maGhe === payload.maGhe
            );
            if(index !== -1 ){
                listChairUpdate.splice(index, 1);
                state.listBookChair=listChairUpdate;
            }else{
                listChairUpdate.push(payload);
                state.listBookChair=listChairUpdate;
            }
            return {...state}
        case "DELETE_CHAIR":
            let listChairUp= [...state.listBookChair];
            let item = listChairUp.findIndex(
               
                (chair) => chair.maGhe === payload.maGhe
            );
            if(item === -1 ){
                listChairUp.splice(item, 1);
                console.log(item)
                state.listBookChair=listChairUp;
            }
            state.listBookChair= listChairUp;
            return {...state}
        case "BOOK_TICKET_SUCCESS":
            return {...state, listBookChair:[]}
        default:
            return state
    }
}
export default reducer;