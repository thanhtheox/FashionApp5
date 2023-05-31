import * as actionTypes from '../constants/userConstants';

export const initUser = (user) => async (dispatch) => {

  dispatch({
    type: actionTypes.INIT_USER,
    payload: {user},
  });
};
export const resetUserWhenLogOut = () => async (dispatch) => {
  dispatch({
    type: actionTypes.USER_RESET,
    payload: {},
  });
};
export const userVerified = (emailVerified) => async (dispatch) => {

  dispatch({
    type: actionTypes.VERIFIED,
    payload: {
      emailVerified: emailVerified,
    },
  });
};