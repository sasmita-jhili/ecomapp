import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    const productData = await axios.get("http://dummyjson.com/products");

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: productData.data.products,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
    });
  }
};

export const addtoCart = (items, product) => async (dispatch) => {
  const cartItems = items.slice();
  let productalreadyincart = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      productalreadyincart = true;
      item.count++;
    }
  });
  if (!productalreadyincart) {
    cartItems.push({ ...product, count: 1 });
  }

  try {
    dispatch({
      type: "ADD_TO_CART",
      payload: cartItems,
    });
  } catch (error) {
    console.log(error);
  }
};

export const decreseItem = (items, product) => async (dispatch) => {
  let decreseItem = items.slice();
  decreseItem.forEach((item) => {
    if (item.id === product.id) {
      if (item.count <= 1) {
        alert("This item will get remove from the cart");
        decreseItem = items.slice().filter((elem) => elem.id !== product.id);
      } else {
        item.count--;
      }
    }
  });
  try {
    dispatch({
      type: "DECRESE_ITEM",
      payload: decreseItem,
    });
  } catch (error) {
    console.log(error);
  }
};
export const removefromCart = (items, product) => {
  const cartItems = items.slice().filter((elem) => elem.id !== product.id);
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      cartItems: cartItems,
    },
  };
};
