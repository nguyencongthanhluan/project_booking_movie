import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import UserReducer from "./../redux/reducers/user";
import movie from "./../redux/reducers/movieList"
import chair from "./../redux/reducers/listChair"
import listBookChair from "./../redux/reducers/listBookChair"
import cinema from "./../redux/reducers/cinema"
import reducerSystem from "./../redux/reducers/theaterSystem";
import cinemaBook from "./../redux/reducers/cinemaBook"
const reducer = combineReducers({
  user: UserReducer,
  movie,
  chair,
  listBookChair,
  cinema,
  reducerSystem, 
  cinemaBook,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
