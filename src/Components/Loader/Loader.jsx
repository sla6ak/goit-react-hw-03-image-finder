import s from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <BallTriangle
        height="150"
        width="150"
        color="tomato"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
