import * as actionTypes from '../constants/addressConstants';

export const initAddress = (addresses,addressesId) => async (dispatch) => {

  dispatch({
    type: actionTypes.INIT_ADDRESS,
    payload: {addresses},
  });
};
export const addAddress = (addresses) => async (dispatch) => {

  dispatch({
    type: actionTypes.ADD_ADDRESS,
    payload: {addresses},
  });
};
export const editAddress = (addresses) => async (dispatch) => {

  dispatch({
    type: actionTypes.EDIT_ADDRESS,
    payload: {addresses},
  });
};
export const resetAddressWhenLogOut = () => async (dispatch) => {
  dispatch({
    type: actionTypes.ADDRESS_RESET,
    payload: {},
  });
};
export const removeAddress = addressId => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_ADDRESS,
      payload: addressId,
    });
};