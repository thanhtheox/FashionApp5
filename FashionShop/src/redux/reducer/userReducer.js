import * as actionTypes from "../constants/userConstants"
const USER_INITIAL_STATE = {
  userItems: {
    user: {
      emailVerified: false,
    },
  },
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INIT_USER:
      const item = action.payload;
      return {
        ...state,
        userItems: action.payload 
      };
    case actionTypes.USER_RESET:
      return {
        ...state,
        userItems: {
          user: {
            emailVerified: false,
          },
        },
      };
    case actionTypes.VERIFIED:
      const emailVerify = action.payload;
      return {
        ...state,
        userItems: {...state.userItems, user: {...state.userItems.user, emailVerified: action.payload.emailVerified}}
      };
    default:
      return state;
  }
};