import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducer';

const store = createStore ( 
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, thunk)
) 

export default store