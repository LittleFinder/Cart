import React from 'react';
import { Link } from 'react-router-dom';
import { IconFavorite, IconsUser, Logo, IconCart } from '../Icons/Icons';
import styles from '../Header/Header.module.css';
import ButtonToggleThemes from '../Button/ButtonToggleThemes';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link className={styles.headerLink}>Men</Link>
        <Link className={styles.headerLink}>Women</Link>
      </div>
      <div className={styles.logoWrapper}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>

      <menu>
        <ul className={styles.listIcons}>
          <li className={styles.userItem}>
            <IconsUser />
          </li>
          <li className={styles.favoriteItem}>
            <Link to="/favorited">
              <IconFavorite />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <IconCart />
            </Link>
          </li>
          <li>
            <ButtonToggleThemes />
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
