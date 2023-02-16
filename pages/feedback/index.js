import { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();
  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data.feedback));
  };
  return (
    <Fragment>
      <ul>
        {props.feedbackItems.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}
            <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>
              Show Setails
            </button>
          </li>
        ))}
      </ul>
      {feedbackData && <p>{feedbackData.email}</p>}
    </Fragment>
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
