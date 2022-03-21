import { createStore } from "redux";
import userListReducers from "./reducer";

const store = createStore ( 
  userListReducers,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 

export default store;