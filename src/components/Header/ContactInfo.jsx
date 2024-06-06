import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import './ContactInfo.css';

const ContactInfo = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && phone) {
      emailjs.sendForm('service_btqzpyu', 'template_kprl7x2', e.target, 'eGFCk9XB9131pv1m4')
        .then((result) => {
          setMessage('Заявка отправлена');
        }, (error) => {
          setMessage('Ошибка отправки заявки');
        });
      e.target.reset();
      setModalIsOpen(false);
    } else {
      setMessage('Пожалуйста, заполните все поля');
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="contact-info transparent">
      <button onClick={openModal} className="call-button white-text">Заказать звонок</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Заказать звонок"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Заказать звонок</h2>
        <form onSubmit={sendEmail}>
          <div>
            <label>ФИО</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Как вас зовут?" 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div>
            <label>Телефон</label>
            <input 
              type="text" 
              name="phone" 
              placeholder="+7 (___) ___-__-__" 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <button type="submit" className="call-button">Отправить</button>
        </form>
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
};

export default ContactInfo;