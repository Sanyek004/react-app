import React, { useState } from 'react';

const News = () => {
  return (
    <div>
      <h1>Новости</h1>
      <h2>Последние новости</h2>
      {/* Content for Новости */}
    </div>
  );
};

const Articles = () => {
  return (
    <div>
      <h1>Статьи</h1>
      <h2>Последние статьи</h2>
      {/* Content for Статьи */}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('news'); // 'news' is the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => handleTabClick('news')}
        >
          Новости
        </button>
        <button
          className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => handleTabClick('articles')}
        >
          Статьи
        </button>
      </div>

      {activeTab === 'news' && <News />}
      {activeTab === 'articles' && <Articles />}
    </div>
  );
};

export default App;
