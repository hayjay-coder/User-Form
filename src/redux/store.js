import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunkMiddleware];


const store = createStore(
  rootReducer,
  {
    registerReducer: {
      data: [],
      success: false
    }
  },
  storeEnhancers(applyMiddleware(...middlewares))
);

export default store;