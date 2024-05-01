import React, { useState } from 'react';
//import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';

function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const submitForm = () => {
    // Обработка отправки формы
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Отправьте нам сообщение</Button>
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
        <div style={{ width: 250, padding: 20 }}>
          <p>Здравствуйте. В настоящий момент операторы не в сети. Оставьте свои контактные данные, чтобы мы могли связаться с вами.</p>
          <TextField label="Ваше имя" fullWidth margin="normal" />
          <TextField label="Ваш email" fullWidth margin="normal" />
          <TextField label="Сообщение" fullWidth margin="normal" multiline rows={4} />
          <Button onClick={submitForm} color="primary">Отправить</Button>
        </div>
      </Drawer>
    </div>
  );
}

export default ContactDrawer;