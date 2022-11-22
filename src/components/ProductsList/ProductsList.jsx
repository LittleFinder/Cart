import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css';

export const ProductsList = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item, index) => {
        item.quantity = 1;
        return (
          <ProductCard
            title={item.title}
            imgURL={item.imgURL}
            price={item.price}
            quantity={item.quantity}
            key={`${item.title}_${index.imgURL}`}
          />
        );
      })}
    </div>
  );
};
