import { useNavigate } from "react-router-dom";
import "./InterviewResults.css";

function InterviewResults({ interviewSession }) {
    const navigate = useNavigate();
    const durationInSeconds =
  interviewSession.endTime && interviewSession.startTime
    ? Math.floor(
        (new Date(interviewSession.endTime) -
          new Date(interviewSession.startTime)) / 1000
      )
    : 0;

const minutes = String(
  Math.floor(durationInSeconds / 60)
).padStart(2, "0");

const seconds = String(
  durationInSeconds % 60
).padStart(2, "0");
  return (
    <div className="interview-results">

      <div className="results-header">
        <h1>Interview Completed</h1>

        <p>
          Great job completing your interview with Amreen!
        </p>
      </div>

      <div className="results-summary">

        <div className="result-card">
          <span className="result-value">
  {interviewSession.answers.length} / {interviewSession.totalQuestions}
</span>
          <span className="result-label">Questions Answered</span>
        </div>

        <div className="result-card">
          <span className="result-value">
  {minutes}:{seconds}
</span>
          <span className="result-label">Interview Duration</span>
        </div>

        <div className="result-card">
          <span className="result-value">--</span>
          <span className="result-label">Confidence Score</span>
        </div>

      </div>

      <div className="results-actions">

       <button
  className="review-btn"
  onClick={() => navigate("/interview-review")}
>
  Review Interview
</button>

        <button
  className="dashboard-btn"
  onClick={() => navigate("/dashboard")}
>
  Back to Dashboard
</button>

      </div>

    </div>
  );
}

export default InterviewResults;