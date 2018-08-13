import {INC,DEC} from "./"
//initializing state for comparision
const initialState = { counter: 0 }


//reducer function
function counterReducer(prevState = initialState, action) {
  switch (action.type) {
    case 'INC':
      return { counter: prevState.counter + 1 }
    case 'DEC':
      return { counter: prevState.counter - 1 }
    default:
      return prevState;
  }
}
