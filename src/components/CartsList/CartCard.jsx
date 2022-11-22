import useShop from '../../context/ShopContext';
import styles from './CartCard.module.css';
import cn from 'classnames';

export const CartCard = ({imgURL, title, price, quantity, product}) => {
  console.log("product22", product)
  const {removeFromCart, IncreaseQuantityInCart, DecrementQuantityInCart} = useShop();

  const handleIncreaseQuantity = () => {
    IncreaseQuantityInCart(title)
  }


  const handleDecrementQuantity = () => {
    DecrementQuantityInCart(quantity, title)
  }


  const handleRemoveFromCart = () => {
    removeFromCart(product)
  }

  return (
    <div className={cn(styles.cartWrapper, styles.cartGrid)}>
      <div className={styles.cartProduct}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} width={150} height={150} src={imgURL} alt="shoes-1" />
        </div>
        <div className={styles.cartDescription}>
            <span className={styles.cartDescription}>{title}</span>
            <button className={styles.cartBtnRemove} onClick={handleRemoveFromCart}>Remove</button>
        </div>
      </div>
      <div>
        <span className={styles.price}>{price}.00$</span>
      </div>
      <div className={styles.quantity}>
        <button className={styles.cartPlus} onClick={handleIncreaseQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={handleDecrementQuantity}>-</button>
      </div>
      <div className={styles.quantity}>{quantity*price}.00$ </div>
    </div>
  );
};
