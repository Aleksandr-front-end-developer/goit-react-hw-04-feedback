export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={e => onLeaveFeedback(e.target.innerText)}>
        Good
      </button>
      <button type="button" onClick={e => onLeaveFeedback(e.target.innerText)}>
        Neutral
      </button>
      <button type="button" onClick={e => onLeaveFeedback(e.target.innerText)}>
        Bad
      </button>
    </>
  );
};
