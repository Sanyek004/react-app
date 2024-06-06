import React from 'react';
import './Header.css';
import ContactInfo from './ContactInfo';

const Header = () => {
    return (
        <header className="transparent">
            <div className="container">
                <div className="header-left">
                    <a href="/" className="logo white-text">SPACE AQUA</a>
                    <nav>
                        <ul>
                            <li><a href="#" className="white-text">Каталог</a></li>
                            <li><a href="#" className="white-text">Подобрать фильтр</a></li>
                            <li><a href="#" className="white-text">Сотрудничество</a></li>
                            <li><a href="#" className="white-text">Публикации</a></li>
                            <li><a href="#" className="white-text">О компании</a></li>
                            <li><a href="#" className="white-text">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <ContactInfo />
                </div>
            </div>
        </header>
    );
};

export default Header;
