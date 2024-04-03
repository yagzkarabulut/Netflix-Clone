import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "./../../constants/index";

// api'dan filmleri alan ve stora'a aktaran aksiyon
export const getPopular = () => (dispatch) => {
  // yüklenme durumu
  dispatch({
    type: ActionTypes.MOVİES_LOADING,
  });

  //   popüler filmler
  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    // başarılı olursa reducer'a bildir
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVİES_SUCCESS,
        payload: res.data.results,
      })
    )
    // hata durumunda reducer bildiri
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVİES_ERROR,
        payload: err.message,
      })
    );
};
