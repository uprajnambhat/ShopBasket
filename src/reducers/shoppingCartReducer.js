const initialState = {
  shoppingItems: [],
  selectedItems: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART_ITEMS":
      return {
        ...state,
        shoppingItems: action.payload,
      };
    case "UPDATE_SELECTED_ITEMS":
      return {
        ...state,
        selectedItems: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
