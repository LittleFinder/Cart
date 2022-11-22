import { createContext, useReducer, useContext } from 'react';
import shopReducer, { initialState } from './shopReducer';

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.title !== product.title,
    );

    updatePrice(updatedCart);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));

    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total,
      },
    });
  };

  const addToFavorite = (favorited) => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: {
        favorited: favorited,
      },
    });
  };

  const removeFromFavorite = (favorited) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: {
        favorited: favorited,
      },
    });
  };

  const IncreaseQuantityInCart = (title) => {
    let updateQuantity = state.products.map((currentProduct) => {
      if (currentProduct.title === title) {
        currentProduct['quantity'] = currentProduct.quantity + 1;
      }
      return currentProduct;
    });
    updatePrice(updateQuantity);
    dispatch({
      type: 'INCREASE_QUANTITY_IN_CART',
      payload: {
        products: updateQuantity,
      },
    });
  };
  const DecrementQuantityInCart = (quantity, title) => {
    let updateQuantity = state.products.map((currentProduct) => {
      if (currentProduct.title === title && quantity > 1) {
        currentProduct['quantity'] = currentProduct.quantity - 1;
      }
      return currentProduct;
    });

    updatePrice(updateQuantity);

    dispatch({
      type: 'DECREASE_QUANTITY_IN_CART',
      payload: {
        products: updateQuantity,
      },
    });
  };

  const cleanAllProductsInCart = () => {
    dispatch({
      type: 'CLEAR_ALL_RODUCTS_IN_CART',
      payload: {
        ...state,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    favorited: state.favorited,
    addToCart,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
    updatePrice,
    IncreaseQuantityInCart,
    DecrementQuantityInCart,
    cleanAllProductsInCart,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error('useShop must be used within ShopContext');
  }

  return context;
};

export default useShop;
