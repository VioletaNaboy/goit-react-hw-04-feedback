import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Section } from './Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Statistics/Notification';
class FeedbackWidget extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + this.props.step,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = Object.keys(this.state);
    const hasFeedback = totalFeedback > 0;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
FeedbackWidget.propTypes = {
  step: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
};
export default FeedbackWidget;
