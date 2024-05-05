import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`product ${isHovered ? 'product--hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-image">
        <img src="https://spaceaqua.ru/upload/resize_webp/iblock/d39/253_253_140cd750bba9870f18aada2478b24840a/ige1u96u2tvmcgi6qqf6cfry2rl9hg38.webp" alt="Oxidizer SCA19 SpaceAqua" />
        <div className="label new">Новинка</div>
        <div className={`product-image-overlay ${isHovered ? 'product-image-overlay--active' : ''}`} />
      </div>
      <div className={`product-info ${isHovered ? 'product-info--hovered' : ''}`}>
        <h3 className="product-title">Oxidizer SCA19 SpaceAqua</h3>
        <p className="price">72 394 Р</p>
        <p className="availability">В наличии</p>
        <div className="product-actions">
          <button className="button add-to-cart">В корзину</button>
          <button className="button favorite">❤</button>
          <button className="button compare">🔄</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
