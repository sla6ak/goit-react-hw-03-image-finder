import s from './Button.module.css';
import React from 'react';

class Button extends React.Component {
  state = {};

  render() {
    return (
      <button className={s.button} onClick={() => this.props.loadMore()}>
        Load more
      </button>
    );
  }
}
export default Button;
