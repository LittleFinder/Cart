import React from 'react';
import useShop from '../../context/ShopContext';
import { CartCard } from '../CartCard/CartCard';
import styles from './CartList.module.css';

export const CartsList = () => {
  const { products } = useShop();
  return (
    <>
      <ul className={styles.cartList}>
        {products.map((product) => {
          return <CartCard {...product} product={product} key={product.title} />;
        })}
      </ul>
    </>
  );
};
