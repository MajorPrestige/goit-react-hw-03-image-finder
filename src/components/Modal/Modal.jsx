import s from './Modal.module.css';

const Modal = () => {
  return (
    <div className={`${s.overlay} ${s.hidden}`}>
      <div className={s.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
