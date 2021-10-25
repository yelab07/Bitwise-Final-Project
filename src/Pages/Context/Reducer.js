export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const BasketTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        cart: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        cart: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart= [...state.Cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    

    default:
      return state;
  }
};

export default reducer;
