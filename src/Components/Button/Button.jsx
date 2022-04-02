import s from './Button.module.css';
import React from 'react';

const Button = ({ loadMore }) => {
  return (
    <button type="button" className={s.button} onClick={() => loadMore()}>
      Load more
    </button>
  );
};
export default Button;
