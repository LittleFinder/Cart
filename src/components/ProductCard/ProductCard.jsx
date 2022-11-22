import { useState, useEffect } from 'react';
import styles from './ProductCard.module.css';
import { PlusIcon, AddedIcon, CheckFavorite, UnCheckFavorite } from '../Icons/Icons';
import useShop from '../../context/ShopContext';

const ProductCard = ({ imgURL, title, price, quantity }) => {
  const { products, addToCart, removeFromCart, favorited, removeFromFavorite, addToFavorite } =
    useShop();
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.title === title);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, title]);

  useEffect(() => {
    const isInFavorite = favorited.find((favorited) => favorited.title === title);

    if (isInFavorite) {
      setIsInFavorite(true);
    } else {
      setIsInFavorite(false);
    }
  }, [favorited, title]);

  const handleClickAdd = () => {
    setIsInCart(!isInCart);
    const product = { title, imgURL, price, quantity };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleClickFavorited = () => {
    const favorited = { title, imgURL, price };

    if (isInFavorite) {
      removeFromFavorite(favorited);
    } else {
      addToFavorite(favorited);
    }
    setIsInFavorite(!favorited);
  };

  return (
    <div className={styles.card}>
      <button onClick={handleClickFavorited} className={styles.favoriteBtn}>
        {isInFavorite ? (
          <UnCheckFavorite className={styles.favoriteIcon} />
        ) : (
          <CheckFavorite className={styles.favoriteIcon} />
        )}
      </button>
      <img className={styles.img} width={290} height={290} src={imgURL} alt="shoes-1" />

      <p className={styles.title}>{title}</p>
      <div className={styles.conteiner}>
        <span className={styles.price}>{price}.00$</span>
        <button
          onClick={handleClickAdd}
          className={`${styles.button} ${isInCart ? styles.checked : styles.add}`}>
          {isInCart ? (
            <AddedIcon className="icon" height={11} width={11} />
          ) : (
            <PlusIcon className="icon" height={11} width={11} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
