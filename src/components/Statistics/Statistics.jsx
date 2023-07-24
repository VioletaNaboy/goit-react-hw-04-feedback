import css from './Statistics.module.css';
import { useFeedbackContext } from '../FeedbackWidget';
export const Statistics = () => {
  const { good, neutral, bad, totalFeedback, positivePercentage } =
    useFeedbackContext();
  return (
    <div className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};
