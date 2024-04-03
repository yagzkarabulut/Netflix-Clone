// kategori verilerini al bee reducera haber ver

import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";

export const getGenres = () => (dispatch) => {
  // api istediği atıldığını reducera haber vermemiz lazım
  dispatch({ type: ActionTypes.GENRES_LOADING });
  // api istediği at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    // veri gelirse reducersa haber ver
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRES_SUCCESS,
        payload: res.data.genres,
      })
    )
    // hata olursa reducersa haber ver
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
