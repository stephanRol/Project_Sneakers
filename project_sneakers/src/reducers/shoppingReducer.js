import { TYPES } from "./shoppingActions";

export const ShoppingInitialState = {
  products: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      {
      }
      break;
    case TYPES.REMOVE_FROM_CART:
      {
      }
      break;
    case TYPES.CLEAR_CART:
      {
      }
      break;
    default:
      return state;
  }
}
