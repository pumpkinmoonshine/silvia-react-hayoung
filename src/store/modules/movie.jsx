import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { pender } from "redux-pender";
import * as api from "../../api/api";

export const VIEW_MOVIE_LIST = "movie/VIEW_MOVIE_LIST";

export const viewMovieList = createAction(VIEW_MOVIE_LIST, api.viewMovieList);

const initialState = {
  movieList: {},
};

export default handleActions(
  {
    ...pender({
      type: VIEW_MOVIE_LIST,
      onSuccess: (state, action) =>
        produce(state, (draft) => {
          draft.movieList = action.payload.data;
        }),
    }),
  },
  initialState
);
