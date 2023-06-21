import * as actionTypes from '../constants/cartConstants';
const CART_INITIAL_STATE = {
  cartId: '',
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      console.log({item});
      const existItem = state.cartItems.find(x => x.detailId === item.detailId);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.detailId === existItem.detailId
              ? {...x, qty: item.qty + x.qty}
              : x,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.ORDER:
      // console.log(action.payload)
      return {
        ...state,
        cartItems: state.cartItems.map(x =>
          x.detailId === action.payload.detailId
            ? {...x, isOrder: action.payload.isOrder}
            : x,
        ),
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.detailId !== action.payload),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(x =>
          x.detailId === action.payload.detailId
            ? {...x, qty: action.payload.qty}
            : x,
        ),
      };
    case actionTypes.CART_RESET_LOGIN:
      return {
        ...state,
        cartItems: [],
        // cartId:'',
      };
    case actionTypes.CART_RESET_ORDER:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.isOrder !== true),
        // cartId:'',
      };
    case actionTypes.INIT_CART:
      // console.log("cartItems:" + JSON.stringify(action.payload.cart.cart.productDetails));
      // console.log("cartId:" + JSON.stringify(action.payload.cart.cart._id));
      const updatedCartItems = action.payload.cart.cart.productDetails.map(
        item => ({
          product: item.productDetailId.productId,
          detailId: item.productDetailId._id,
          colorCode: item.productDetailId.colorId.code,
          sizeName: item.productDetailId.sizeId.name,
          qty: item.quantity,
          isOrder: false,
        }),
      );
      console.log('CART::::', JSON.stringify(action.payload.cart.cart._id));
      return {
        ...state,
        cartItems: [...updatedCartItems],
        cartId: action.payload.cart.cart._id,
      };
    default:
      return state;
  }
};
