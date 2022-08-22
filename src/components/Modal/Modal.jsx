import React, { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal(false);
    }
  };

  onEscPush = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal(false);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPush);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPush);
  }

  render() {
    const { targetPhoto } = this.props;
    return (
      <div onClick={this.onOverlayClick} className={s.overlay}>
        <div className={s.modal}>
          <img src={targetPhoto} alt="large target img" />
        </div>
      </div>
    );
  }
}

export default Modal;
