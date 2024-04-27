import React, { useReducer } from "react";
import { data} from "../../../data";

import reducer from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: {id}});
  };

  const resetItems = () => {
    dispatch({type: RESET_LIST});
  };

  const clearList = () => dispatch({ type: CLEAR_LIST });

  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}>
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}>
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
