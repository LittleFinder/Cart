import React from 'react';
import { CartsList } from '../../components/CartsList/CartsList';
import CartInfo from '../../components/CartInfo/CartInfo';
import styles from './Cart.module.css';
import useShop from '../../context/ShopContext';

export const Cart = () => {
  const { total, products, cleanAllProductsInCart } = useShop();

  if (!products.length) {
    return <h1 className={styles.cartTitle}>Your cart is empty </h1>;
  } else {
    return(
      <div className={styles.cartWrapper}>
      <h1 className={styles.cartTitle}>You have products in Cart: </h1>

      <CartInfo />
      <CartsList />
      <div>
        <span className={styles.total}> Your cart total is {total}.00$</span>
        <button className={styles.btnReset} onClick={cleanAllProductsInCart}>
          Clear Cart
        </button>
      </div>
    </div>
    )
  
  }
}
