// src/components/ProductCard.js

import React from 'react'; // <-- Должен быть!

function ProductCard(props) {
  const { name, price } = props.product || {}; // Добавим дефолтный пустой объект на всякий случай

  return (
    <div className="product-card">
      {/* Placeholder for Image */}
      <div className="product-image-placeholder"></div>
      <div className="product-info">
        <p className="price">{price}</p>
        <p className="name">{name}</p>
      </div>
      <button className="add-to-cart-btn">В корзину</button>
    </div>
  );
}

export default ProductCard; // <-- Должен быть!