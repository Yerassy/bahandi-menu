// src/App.js

import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

// Импорт данных из data.js
import { burgerData, navItems, footerLinks, drinkData } from './data.js';
// Можете импортировать drinkData для отображения второго экрана
console.log("DEBUG App.js: burgerData length:", burgerData ? burgerData.length : 'undefined');
console.log("DEBUG App.js: navItems length:", navItems ? navItems.length : 'undefined');
// Главный Классовый Компонент
class App extends React.Component {
  render() {
    // Данные, которые мы передадим через props
    const dataForBurgerScreen = burgerData;
    const dataForDrinkScreen = drinkData;
    const currentActiveCategory = 'Бургеры'; // Активный пункт меню
    const currentDrinkCategory = 'Напитки'; // Активный пункт меню

    return (
      <div className="app">
        {/* Передаем данные в Header через props */}
        <Header 
          navItems={navItems} 
          activeCategory={currentActiveCategory} 
        />
        
        <main className="content">
          {/* Передаем данные в ProductList через props, чтобы отобразить Бургеры */}
          <ProductList 
            title={currentActiveCategory} 
            products={dataForBurgerScreen}

          />
          <ProductList 
            title={currentDrinkCategory} 
            products={dataForDrinkScreen}
             
          />
        </main>
        
        {/* Передаем данные в Footer через props */}
        <Footer footerData={footerLinks} />
      </div>
    );
  }
}

export default App;

