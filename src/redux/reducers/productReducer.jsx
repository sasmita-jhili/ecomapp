const initialState = {
  products: [],
  filteredItem: [],
  search: "",
  loading: true,
};
export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "PRODUCT_LIST_FAIL":
      return { loading: true };
    default:
      return state;
  }
};
