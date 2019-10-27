import { combineReducers } from 'redux';
import { USER_REGISTER_SUCCESS } from './actionTypes';
const initialState  = { data: [], success: false, };

export const registerReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case USER_REGISTER_SUCCESS : 
    return {
      ...state,
      ...payload
    }
    default:
      return state
  }
};

export const rootReducer = combineReducers({
    registerReducer
});