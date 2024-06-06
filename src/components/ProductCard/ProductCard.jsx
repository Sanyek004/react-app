import React, { useState } from 'react';
import { Carousel } from 'antd';
import './ProductCard.css';

const ProductImage = ({ imageUrl, altText }) => (
  <div className="product-image">
    <img src={imageUrl} alt={altText} />
  </div>
);

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCartClick = () => {
    console.log('Added to cart:', product.title);
  };

  return (
    <div className="product card">
      <ProductImage imageUrl={product.imageUrl} altText={product.altText} />
      <div className="product-info card-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="price">{product.price} Р</p>
        <p className={`availability ${product.available ? 'in-stock' : 'out-of-stock'}`}>
          {product.available ? 'В наличии' : 'Нет в наличии'}
        </p>
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

const ProductSlider = ({ products }) => {
  return (
    <div className="slider">
      <h2 className="catalog-title">Рекомендуем</h2>
      <Carousel dots draggable swipeToSlide slidesToShow={3}>
        {products.map((product, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;