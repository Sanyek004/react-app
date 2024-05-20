import React, { useState } from 'react';
import './ProductCard.css';

const ProductImage = ({ imageUrl, altText }) => (
  <div className="product-image">
    <img src={imageUrl} alt={altText} />
  </div>
);

const ProductCard = ({ product }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCartClick = () => {
    console.log('Added to cart:', product.title);
  };

  return (
    <div className="product">
      <ProductImage imageUrl={product.imageUrl} altText={product.altText} />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="price">{product.price} Р</p>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          В наличии
        </label>
        <div className="product-actions">
          <button
            className={`button favorite ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            ❤
          </button>
          <button className="button add-to-cart" onClick={handleAddToCartClick}>
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;