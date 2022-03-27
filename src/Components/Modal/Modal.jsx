import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';

export default class Modal extends Component {
  keyDownClouse = e => {
    if (e.code === 'Escape') {
      this.props.onModalClouse();
    }
  };
  componentDidMount(pProp, pState) {
    window.addEventListener('keydown', this.keyDownClouse);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownClouse);
  }
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.props.onModalClouse}>
        <div className={s.modal}>
          <img className={s.img} src={this.props.imgFull} alt="" />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}
