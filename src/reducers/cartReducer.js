const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //finding changed item
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index > -1) {
        console.log("محصول قبلا اضافه شده است");
        return state;
      }

      //clone the cart to update it
      const updatedCart = [...state.cart];

      updatedCart.push({ ...action.payload });

      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    }
    case "REMOVE_FROM_CART": {
      //clone the cart to update it
      const updatedCart = [...state.cart];

      const filteredCart = updatedCart.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        cart: filteredCart,
        total: state.total - action.payload.price,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
