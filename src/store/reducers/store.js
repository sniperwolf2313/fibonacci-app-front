import { createStore } from 'redux';

const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

const addToHistory = (result) => ({
  type: ADD_TO_HISTORY,
  payload: result,
});

const initialState = {
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      if (state.history.some(entry => entry.time === action.payload.time && 
                                        JSON.stringify(entry.series) === JSON.stringify(action.payload.series))) {
        return state;
      }
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export { store, addToHistory };
