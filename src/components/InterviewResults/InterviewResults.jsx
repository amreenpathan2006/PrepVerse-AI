import "./InterviewResults.css";

function InterviewResults() {
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
          <span className="result-value">1 / 10</span>
          <span className="result-label">Questions Answered</span>
        </div>

        <div className="result-card">
          <span className="result-value">15:00</span>
          <span className="result-label">Interview Duration</span>
        </div>

        <div className="result-card">
          <span className="result-value">--</span>
          <span className="result-label">Confidence Score</span>
        </div>

      </div>

      <div className="results-actions">

        <button className="review-btn">
          Review Interview
        </button>

        <button className="dashboard-btn">
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default InterviewResults;