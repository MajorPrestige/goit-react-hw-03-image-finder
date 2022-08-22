import { Grid } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <Grid
        height="160"
        width="160"
        color="#3f51b5"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperClass={s.loader}
        visible={true}
      />
    </div>
  );
};

export default Loader;
