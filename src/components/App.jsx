import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / (countTotalFeedback() / 100));
  };
  const handleClick = e => {
    console.log(e);
    switch (e) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        throw new Error('Error');
    }
  };
  const total = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleClick}></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            total={total}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};
