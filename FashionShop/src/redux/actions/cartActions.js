import * as actionTypes from '../constants/cartConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = (product,detailId,colorCode,sizeName, qty) => async (dispatch, getState) => {

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product:product,
      detailId:detailId,
      colorCode:colorCode,
      sizeName:sizeName,
      qty: qty,
    },
  });

};
export const order = (detailId,isOrder) => async (dispatch, getState) => {

  dispatch({
    type: actionTypes.ORDER,
    payload: {
      detailId:detailId,
      isOrder:isOrder,
    },
  });

};
// console.log(JSON.stringify(cartItems))
export const removeFromCart = detailId => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: detailId,
  });

};

export const adjustQTY = (detailId, qty) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADJUST_QTY,
    payload: {
      detailId,
      qty,
    },
  });

};

export const resetCart = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_RESET,
    payload: {},
  });

};



export const initCartLogIn = (cart) => async (dispatch, getState) => {
  console.log("cart ->>", cart.cart.productDetails);


  dispatch({
   type: actionTypes.INIT_CART,
    payload: {cart},
  });
};