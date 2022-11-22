import React from 'react'
import styles from '../CartsList/CartCard.module.css'
import cn from 'classnames'

const CartInfo = () => {
  return (
    <ul className={cn(styles.listHeadings, styles.cartGrid)}>
        <li className={styles.itemHeading}>Product</li>
        <li className={styles.itemHeading}>Price</li>
        <li className={styles.itemHeading}>Quantity</li>
        <li className={styles.itemHeading}>Total</li>
    </ul>
  )
}
export default CartInfo