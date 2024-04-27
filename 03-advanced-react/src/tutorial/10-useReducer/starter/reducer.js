import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    const id = action.payload.id;
    const newList = state.people.filter((person) => person.id !== id);

    return { ...state, people: newList };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;
