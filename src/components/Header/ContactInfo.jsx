import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info transparent">
            <div className="contacts">
                <a href="tel:+78005006571" className="white-text">+7 (800) 500-65-71</a>
                <a href="mailto:mail@spaceaqua.ru" className="white-text">mail@spaceaqua.ru</a>
            </div>
            <button className="call-button white-text">Заказать звонок</button>
        </div>
    );
};

export default ContactInfo;
