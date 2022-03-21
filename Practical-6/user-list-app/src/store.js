import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import userListReducers from "./reducer";

const store = createStore ( 
  userListReducers,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
) 

export default store