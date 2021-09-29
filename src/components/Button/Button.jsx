import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onButtonClick }) => {
  return (
          <button className={styles.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;