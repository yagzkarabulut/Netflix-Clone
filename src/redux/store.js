import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducers from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movieReducer,
  genreReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk));
