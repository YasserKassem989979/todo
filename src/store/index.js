import {createStore, combineReducers, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {todoReducer} from './reducers/todosReducer';
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
  TODOS:todoReducer
});

const persistConfig = {
  key: 'primary',
  storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;


const configureStore = () => {
  return createStore(pReducer, {}, composeEnhancers());
};

const store = configureStore();
const persistor = persistStore(store);

export {store, persistor};
