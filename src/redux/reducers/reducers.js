const intialState = {
  cartItem: [],
  productData: [],
  filterData: [],
  inputFocus: "",
};

function cartReducer(state = intialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartItem: [...state.cartItem, { ...payload }] };
    case "EMPTY_CART":
      return { ...state, cartItem: [] };
    case "RES_DATA":
      return { ...state, inputFocus: "", productData: payload };
    case "FILTER_DATA":
      return { ...state, filterData: payload };
    case "SHOW_BANNER":
      return { ...state, inputFocus: payload };

    default:
      return state;
  }
}

export default cartReducer;
