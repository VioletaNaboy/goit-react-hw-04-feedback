import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Statistics/Notification';
export const FeedbackWidget = ({ step }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  const handleFeedback = useCallback(
    type => {
      switch (type) {
        case 'good':
          setGood(prevGood => prevGood + step);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + step);
          break;
        case 'bad':
          setBad(prevBad => prevBad + step);
          break;
        default:
          break;
      }
    },
    [step]
  );

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          handleFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
FeedbackWidget.defaultProps = {
  step: 1,
};

FeedbackWidget.propTypes = {
  step: PropTypes.number.isRequired,
};
export default FeedbackWidget;
