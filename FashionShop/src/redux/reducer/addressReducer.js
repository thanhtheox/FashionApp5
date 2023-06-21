import * as actionTypes from '../constants/addressConstants';
const ADDRESS_INITIAL_STATE = {
  addresses: [],
  addressesId: '',
};

export const addressReducer = (state = ADDRESS_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INIT_ADDRESS:
      return {
        ...state,
        addresses: action.payload.addresses.addresses,
        addressesId: action.payload.addresses._id,
      };
    case actionTypes.EDIT_ADDRESS:
      console.log('reducer', action.payload.addresses);
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    case actionTypes.ADD_ADDRESS:
      console.log('reducer', action.payload.addresses);
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    case actionTypes.ADDRESS_RESET:
      return {
        ...state,
        addresses: [],
        addressId: '',
      };
    case actionTypes.REMOVE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(x => x._id !== action.payload),
      };
    default:
      return state;
  }
};
