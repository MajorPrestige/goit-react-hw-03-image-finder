import s from './Notification.module.css';
import { FcSearch } from 'react-icons/fc';

const Notification = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
        There are no matching results for your search.
      </h2>
      <h3 className={s.secondTitle}>Search Tips:</h3>
      <div className={s.wrapper}>
        <FcSearch className={s.loop} size={'2em'} />
        <ul className={s.list}>
          <li>Make sure all words are spelled correctly.</li>
          <li>Try using more general or just different keywords.</li>
          <li>Try shortening your search term.</li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
