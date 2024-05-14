import React, { useState } from 'react';
import './Publication.css';

// Константа для изображений
const images = {
  softx: '/images/softx.png',
  service24_7: '/images/24_7_service.png',
  discounts: '/images/discounts.png',
  newWarehouse: '/images/new_warehouse.png',
  rainWater: '/images/rain_water.png',
  proverb: '/images/proverb.png',
  laundry: '/images/laundry.png',
  errorCodes: '/images/error_codes.png'
};

const Publication = () => {
  const [activeTab, setActiveTab] = useState('Новости');
  const [fade, setFade] = useState(false);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setFade(true);
      setTimeout(() => {
        setActiveTab(tab);
        setFade(false);
      }, 300); // 300ms matches the CSS transition duration
    }
  };

  const renderContent = () => {
    if (activeTab === 'Новости') {
      return (
        <>
          <div className="publications-main">
            <article className="publication-item featured">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/3d6/538_318_140cd750bba9870f18aada2478b24840a/v950g2m8i6ys6g78tdv7yx34448ztzvb.webp' alt="SoftX" />
              <div className="publication-date">14 мая 2024</div>
              <h2>Теперь доступна фасовка SoftX на 12 литров!</h2>
              <p>В каталоге SpaceAqua теперь доступна фасовка SoftX на 12 литров! SoftX – фильтрующий материал для умягчения воды. Произведён из канадского сырья без хлорсодержащих средств, что гарантирует их отсутствие в воде после использования.</p>
            </article>
          </div>
          <div className="publications-sidebar">
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/465/538_318_1/mz8vgnavt9u2bnr2prdpn7r6x6tjakwh.webp' alt="24/7 Service" />
              <div className="publication-date">26 апреля 2024</div>
              <h2>Как SpaceAqua работает в майские праздники</h2>
              <p>Сообщаем график работы офиса, склада и транспортных компаний в период майских праздников.</p>
            </article>
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/b32/538_318_140cd750bba9870f18aada2478b24840a/xbn0gk2muemjzxqb59xb0b9l12p5mi7s.webp' alt="Discounts" />
              <div className="publication-date">26 апреля 2024</div>
              <h2>Оплачивайте заказы бонусами!</h2>
              <p>В мае вы сможете списывать до 7% стоимости систем SpaceAqua при оплате заказа через Личный кабинет.</p>
            </article>
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/55f/538_318_1/muhdakixeu4fk4jblamus5hsy337eqkd.webp' alt="New Warehouse" />
              <div className="publication-date">16 апреля 2024</div>
              <h2>Новый адрес склада в Твери!</h2>
              <p>Теперь наш склад в Твери находится по другому адресу.</p>
            </article>
          </div>
        </>
      );
    } else if (activeTab === 'Статьи') {
      return (
        <>
          <div className="publications-main">
            <article className="publication-item featured">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/6a2/538_318_1/in2td2comv9estg2dezxkknl9k853i7n.webp' alt="Rain Water" />
              <div className="publication-date">13 мая 2024</div>
              <h2>Пригодна ли дождевая вода для питья?</h2>
              <p>Дождевая вода – самая чистая. Но парадокс – пить её при этом нельзя, только если это не вопрос выживания, когда любые средства будут хороши. Почему так происходит и можно ли всё-таки её использовать в быту?</p>
            </article>
          </div>
          <div className="publications-sidebar">
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/91d/538_318_1/9fwlc8j8dfucgcmf3u7xofu6x3hzfxk8.webp' alt="Proverbs about Water" />
              <div className="publication-date">27 апреля 2024</div>
              <h2>Твои слова водица – известные поговорки и пословицы о воде</h2>
              <p>Русский язык богат своим разнообразием звуков, словообразований и речевых оборотов. А поговор...</p>
            </article>
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/396/538_318_1/eacqcin4z4vw6u83ysng7ze0uc2e5xfh.webp' alt="Laundry" />
              <div className="publication-date">23 апреля 2024</div>
              <h2>Большая стирка – как добиться мягкой воды в стиральной машине</h2>
              <p>Качество и свойства воды играют немаловажную роль в работе бытовых приборов, в частности, в п...</p>
            </article>
            <article className="publication-item">
              <img src='https://spaceaqua.ru/upload/resize_webp/iblock/97a/538_318_140cd750bba9870f18aada2478b24840a/dp22okq6xhwl3seif7uck2ehv0xi3uw7.webp' alt="Error Codes" />
              <div className="publication-date">17 апреля 2024</div>
              <h2>Причины возникновения кодов ошибок клапана Cappers SCA 19 и способы устранения</h2>
              <p>В статье мы расскажем о кодах ошибок клапана Cappers SCA 19 и почему они появляются, а также ...</p>
            </article>
          </div>
        </>
      );
    }
  };

  return (
    <div className="publications-container">
      {/* <header className="publications-header"> */}
        <h1>Публикации</h1>
        <nav className="publications-nav">
          <ul>
            <li className={activeTab === 'Новости' ? 'active' : ''} onClick={() => handleTabClick('Новости')}>Новости</li>
            <li className={activeTab === 'Статьи' ? 'active' : ''} onClick={() => handleTabClick('Статьи')}>Статьи</li>
          </ul>
        </nav>
      {/* </header> */}
      <section className={`publications-content ${fade ? 'fade' : ''}`}>
        {renderContent()}
      </section>
    </div>
  );
};

export default Publication;
