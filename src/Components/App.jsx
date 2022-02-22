import React from 'react';
// import { nanoid } from 'nanoid'; // генерирует айди
import s from './App.module.css';

class App extends React.Component {
  state = {};

  //генерируем необходимые ключи
  // idGenerator = () => nanoid();

  render() {
    return <div className={s.conteiner}></div>;
  }
}
export default App;
