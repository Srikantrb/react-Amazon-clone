export const initialstate = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id == action.id);
      let newbasket = [...state.basket];

      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("Cant remove the item as it is not in the basket ");
      }

      return {
        ...state,
        basket: newbasket,
      };

    // return {
    //   ...state,
    //   basket: state.basket.filter((item) => item.id !== action.id),
    // };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);
