import { createAction } from ".";
import { movieService } from "./../../Services";

export const movieList=()=>{
    return (dispatch)=>{
        movieService
            .movieList()
            .then((res)=>{
                console.log(res)
                dispatch(createAction("SET_MOVIELIST", res.data));
            })
            .catch((err)=>{
                console.log(err)
            })
    };
};

export const onChangeTrailer = (trailer) => dispatch => {
    console.log("Trailer: ", trailer)
    dispatch(createAction("SET_TRAILER", trailer))
    // dispatch({
    //     type: "SET_TRAILER",
    //     payload: trailer
    // })
}

export const movieDetail=(id)=>dispatch=>{
    movieService
    .fetchMovieDetail(id)
    .then((res)=>{
        console.log(res);
        dispatch(createAction("FETCH_MOVIE_DETAIL", res.data))
    })
    .catch((err)=>{
        console.log(err)
    })
}

