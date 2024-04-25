import React, { useReducer } from "react";
import { data, people } from "../../../data";

const defaultState = {
  people: data,
  isLoading: false,
};

const CLEAR_LIST = 'CLEAR_LIST';
const RESET_LIST = 'RESET_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {};

  const resetItems = () => {
    dispatch({type: 'do something'});
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
