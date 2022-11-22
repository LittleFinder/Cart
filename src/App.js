import './App.css';
import Header from './components/Header/Header';
import {useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext';
import { ShopProvider } from "./context/ShopContext"
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ShopProvider>
        <div className="App" data-theme={theme}>
        <Header/>
          <div className="mainWrapper">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </div>
        
         </div>
        </ShopProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
