import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'persist',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore ( 
  persistedReducer,
  composeWithDevTools()
);

export const persistor = persistStore(store);
export default store;