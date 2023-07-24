import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { useFeedbackContext } from '../FeedbackWidget';
export const FeedbackOptions = ({ options }) => {
  const { handleFeedback } = useFeedbackContext();
  return (
    <div className={css.btnsWrapper}>
      {options.map(option => (
        <button key={option} onClick={() => handleFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
