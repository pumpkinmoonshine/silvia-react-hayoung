import { createAction, handleActions } from "redux-actions";

export const ENABLE = "loader/ENABLE";
export const DISABLE = "loader/DISABLE";

export const enableLoader = createAction(ENABLE);
export const disableLoader = createAction(DISABLE);

const initialState = {
  loading: true,
};

export default handleActions(
  {
    [ENABLE]: (state) => ({ ...state, loading: true }),
    [DISABLE]: (state) => ({ ...state, loading: false }),
  },
  initialState
);
