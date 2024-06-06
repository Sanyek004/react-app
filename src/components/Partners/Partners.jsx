import React from 'react';

const Partners = () => {
  const handleClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0';
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '50%', marginRight: '20px' }}>
        <h1>Станьте партнёром компании</h1>
      </div>
      <div style={{ 
        width: '50%',
        padding: '20px',
        borderRadius: '8px',
      }}>
        <p>
          Более 5000 партнёров уже зарабатывают вместе с нами. С
          высококачественным оборудованием и гарантией на наши системы
          водоочистки вы застрахованы от репутационных и финансовых рисков.
        </p>
        <button onClick={handleClick}>Стать дилером</button>
      </div>
    </div>
  );
};

export default Partners;