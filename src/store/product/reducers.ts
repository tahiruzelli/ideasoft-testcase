import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_RESET,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
} from "./types";

const initialState = {
  products: [],
  isLoading: true,
  error: null,
};

const product = (state = initialState, action: any) => {
  const { payload = {} } = action;
  switch (action.type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_PRODUCTS_RESET:
      return {
        ...state,
        products: {},
      };

    default:
      return state;
  }
};
export default product;
