import React from 'react'; 
 
const IconDescription = ({ iconUrl, description }) => ( 
  <div> 
    <img src={iconUrl} alt="Icon" /> 
    <p>{description}</p> 
  </div> 
); 
 
const App = () => { 
  const iconDescriptions = [ 
    { iconUrl: 'https://example.com/icon1.png', description: 'Description 1' }, 
    { iconUrl: 'https://example.com/icon2.png', description: 'Description 2' }, 
    { iconUrl: 'https://example.com/icon3.png', description: 'Description 3' }, 
  ]; 
 
  return ( 
    <div> 
      <h1>О компании</h1> 
      <p>SpaceAqua — это прогрессивный бренд для людей, которые заботятся о своём здоровье и комфорте. Мы работаем, чтобы обеспечить наших клиентов безопасной, чистой и вкусной водой.</p> 
      <div> 
        {iconDescriptions.map((iconDescription, index) => ( 
          <IconDescription key={index} {...iconDescription} /> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default App;