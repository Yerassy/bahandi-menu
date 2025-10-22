// src/components/ProductList.js

import React from 'react'; // <-- Должен быть!
import ProductCard from './ProductCard'; // <-- Должен быть!

// Классовый компонент для отображения списка продуктов
class ProductList extends React.Component {
  render() {
    const { title, products } = this.props;

    // ЭТА ПРОВЕРКА ВОЗВРАЩАЕТ ВАШ ТЕКСТ:
    if (!products || !Array.isArray(products) || products.length === 0) {
        // Проверьте консоль браузера: если вы видите эту строку,
        // значит, products пришло пустым, undefined или не массивом.
        console.error("DEBUG: products is empty or undefined!");
        return <p>Нет данных о продуктах.</p>; 
    }
    
    return (
      <section className="product-list-section">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {/* Итерация: */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList; // <-- Должен быть!