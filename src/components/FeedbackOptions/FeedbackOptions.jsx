export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </>
  );
};
