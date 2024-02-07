export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
      </button>
    </>
  );
};
