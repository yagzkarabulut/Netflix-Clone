import { ActionTypes } from "./../actionTypes";

const innitialState = {
  populerMovies: [],
  isLoading: false,
  isError: false,
};

const movieReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ActionTypes.MOVİES_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.MOVİES_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    case ActionTypes.MOVİES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        populerMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
