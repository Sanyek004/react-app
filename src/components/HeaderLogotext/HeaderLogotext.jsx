import React from 'react';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/1%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB-5.svg/512px-1%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB-5.svg.png" // замените на ссылку на вашу картинку
        alt="First Channel"
        style={{ width: 500, height: 500 }}
      />
      <div style={{ marginLeft: 20 }}>
        <h1>Первый Канал</h1>
        <p>Первый пошёл АХАХАХАХАХХАХАХАХАХ.</p>
      </div>
    </div>
  );
};

export default App;
