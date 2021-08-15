export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const emptyCart = (data) => {
  return {
    type: "EMPTY_CART",
    payload: data,
  };
};

export const productData = (data) => {
  return {
    type: "RES_DATA",
    payload: data,
  };
};

export const searchData = (data) => {
  return {
    type: "FILTER_DATA",
    payload: data,
  };
};

export const showBanner = (data) => {
  return {
    type: "SHOW_BANNER",
    payload: data,
  };
};

