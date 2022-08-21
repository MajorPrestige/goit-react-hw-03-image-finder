import s from './Button.module.css';

const Button = ({ onBtnClick }) => {
  return (
    <button onClick={() => onBtnClick()} className={s.Button} type="button">
      Load more
    </button>
  );
};

export default Button;
