import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  return (
    <ul>
      {props.feedbackItems.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
