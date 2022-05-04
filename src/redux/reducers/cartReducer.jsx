const initialState = { cartData: [] };
export const addcartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartData: action.payload };
    case "DECRESE_ITEM":
      return {
        cartData: action.payload,
      };
    case "REMOVE_FROM_CART":
      return { cartData: action.payload.cartItems };
    default:
      return state;
  }
};
