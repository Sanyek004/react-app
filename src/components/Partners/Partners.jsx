import React from 'react'; 
 
const Header = () => { 
  const handleClick = () => { 
    window.location.href = 'https://www.youtube.com/watch?v=oHg5SJYRHA0'; 
  }; 
 
  return ( 
    <div> 
      <h1>Станьте партнёром компании</h1> 
      <p>Более 5000 партнёров уже зарабатывают вместе с нами. С высококачественным оборудованием и гарантией на наши системы водоочистки вы застрахованы от репутационных и финансовых рисков.</p> 
      <button onClick={handleClick}>Стать дилером</button> 
    </div> 
  ); 
}; 
 
export default Header;