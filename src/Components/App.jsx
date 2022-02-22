import React from 'react';
import { nanoid } from 'nanoid'; // генерирует айди
// import Forma from './Forma/Forma';
import Title from './Title/Title';
import s from './App.module.css';
// import ContactList from './ContactList/ContactList';
// import NotContacts from './NotContacts/NotContacts';

class App extends React.Component {
  state = {};

  //генерируем необходимые ключи
  idGenerator = () => nanoid();

  render() {
    return (
      <div className={s.conteiner}>
        <Title text={'Impeg'} />
      </div>
    );
  }
}
export default App;
