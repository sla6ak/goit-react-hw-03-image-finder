import React from 'react';
import s from './Forma.module.css';

class Searchbar extends React.Component {
  state = {};

  //внутрений метод сабмита обрабатывающий событие
  formSubmit = event => {
    event.preventDefault();
  };
  // очистка формы
  reset = () => {
    this.setState({});
  };

  render() {
    return (
      <form className={} action="" onSubmit={this.formSubmit}></form>
    );
  }
}

export default Searchbar;
