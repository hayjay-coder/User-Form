import { USER_REGISTER_SUCCESS } from './actionTypes';


export const userRegisterSuccess = data => ({
  type: USER_REGISTER_SUCCESS,
  payload: {
    data,
    success: true
  }
});

export const userRegisterAction = (userData)  => {
  return userRegisterSuccess(userData);
};