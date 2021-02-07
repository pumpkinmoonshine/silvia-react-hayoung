import { createAction, handleActions } from "redux-actions";

export const ADD_LIST = "todo/ADD_LIST";
export const TOGGLE_LIST = "todo/TOGGLE_LIST";
export const MODIFY_LIST = "todo/MODIFY_LIST";
export const DELETE_LIST = "todo/DELETE_LIST";

export const addList = createAction(ADD_LIST);
export const toggleList = createAction(TOGGLE_LIST);
export const modifyList = createAction(MODIFY_LIST);
export const deleteList = createAction(DELETE_LIST);

const item = {
  id: 1,
  text: "예시",
  done: false,
};

const initialState = [item];

export default handleActions(
  {
    [ADD_LIST]: (state, action) => {
      return state.concat(action.payload);
    },
    [TOGGLE_LIST]: (state, action) => {
      return state.map((state) =>
        state.id === action.payload ? { ...state, done: !state.done } : state
      );
    },
    [MODIFY_LIST]: (state, { payload: { id, text } }) => {
      return state.map((state) =>
        state.id === id ? { ...state, text: text } : state
      );
    },
    [DELETE_LIST]: (state, action) => {
      return state.filter((state) => state.id !== action.payload);
    },
  },
  initialState
);
