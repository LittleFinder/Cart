import React from 'react';
import styles from '../Home/Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import cn from 'classnames'


export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const itemResponse = await axios.get('https://62f10d9625d9e8a2e7c4e059.mockapi.io/items');
      setItems(itemResponse.data);
    }
    fetchData();
  }, []);

  return (
    <main className={cn(styles.mainWrapper, styles.content)}>
        <h1 className={styles.heading}>All sneakers:</h1>
     <ProductsList items={items}/>
    </main>
  );
};
