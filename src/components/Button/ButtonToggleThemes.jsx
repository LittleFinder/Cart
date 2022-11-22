import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './ButtonToggleThemes.module.css'




const ButtonToggleThemes = () => {
const {theme, setTheme} = useContext(ThemeContext);

const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === 'light'? 'dark' : 'light');
}
  return (
    <button onClick={handleThemeToggle} className={styles.button}>dark theme</button>
        
  )
}
export default ButtonToggleThemes