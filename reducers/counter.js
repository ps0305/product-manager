import { INC, DEC } from "../actionTypes/counter";

const initialState = { counter: 0 };

export default function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + action.by };
    case DEC:
      return { counter: prevState.counter - action.by };
    default:
      return prevState;
  }
}