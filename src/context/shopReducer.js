export const initialState = {
  total: 0,
  products: [],
  favorited: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('add_to_cart', payload);

      return {
        ...state,
        products: payload.products,
      };

    case 'INCREASE_QUANTITY_IN_CART':
      return {
        ...state,
        products: payload.products,
      };

    case 'DECREASE_QUANTITY_IN_CART':
      return {
        ...state,
        products: payload.products,
      };

    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorited: payload.favorited,
      };

    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorited: payload.favorited,
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: payload.products,
      };

    case 'UPDATE_PRICE':
      return {
        ...state,
        total: payload.total,
      };

    case 'CLEAR_ALL_RODUCTS_IN_CART':
      return {
        ...initialState,
      };

    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default shopReducer;
