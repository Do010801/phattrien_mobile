// redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { dishes } from './dishes';
import { comments } from './comments';
// import thunk from 'redux-thunk';
const thunk = require('redux-thunk').thunk;
import logger from 'redux-logger';
// reducers
import { leaders } from './leaders';
import { promotions } from './promotions';
import { favorites } from './favorites';  
// redux-persist
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const config = { key: 'root', storage: AsyncStorage, debug: true };
// export const ConfigureStore = () => {
//   const store = createStore(
//     combineReducers({ leaders, dishes, comments ,promotions, favorites  }),
//     applyMiddleware(thunk, logger)
//   );
//   return store;
// };
export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, { leaders, dishes, comments, promotions, favorites }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return { persistor, store };
};