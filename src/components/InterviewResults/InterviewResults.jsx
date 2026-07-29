import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InterviewResults.css";

function InterviewResults({ interviewSession }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!interviewSession?.level) return;

    const completedLevels = JSON.parse(
      localStorage.getItem("completedLevels") || "[]"
    );

    if (!completedLevels.includes(interviewSession.level)) {
      completedLevels.push(interviewSession.level);

      localStorage.setItem(
        "completedLevels",
        JSON.stringify(completedLevels)
      );
    }
  }, [interviewSession]);

  const durationInSeconds =
    interviewSession.endTime && interviewSession.startTime
      ? Math.floor(
          (new Date(interviewSession.endTime) -
            new Date(interviewSession.startTime)) /
            1000
        )
      : 0;

  const minutes = String(
    Math.floor(durationInSeconds / 60)
  ).padStart(2, "0");

  const seconds = String(
    durationInSeconds % 60
  ).padStart(2, "0");

  const evaluation = interviewSession.evaluation;

  const confidenceScore =
    evaluation?.percentage ?? 0;

  return (
    <div className="interview-results">

      {/* Header */}
      <div className="results-header">
        <h1>Interview Completed</h1>

        <p>
          Great job completing your interview with Amreen!
        </p>
      </div>

      {/* Summary Cards */}
      <div className="results-summary">

        <div className="result-card">
          <span className="result-value">
            {interviewSession.answers.length} /
            {" "}
            {interviewSession.totalQuestions}
          </span>

          <span className="result-label">
            Questions Answered
          </span>
        </div>

        <div className="result-card">
          <span className="result-value">
            {minutes}:{seconds}
          </span>

          <span className="result-label">
            Interview Duration
          </span>
        </div>

        <div className="result-card">
          <span className="result-value">
            {confidenceScore}%
          </span>

          <span className="result-label">
            Confidence Score
          </span>
        </div>

      </div>

      {/* AI Feedback */}
      <div className="feedback-section">

        <h2>AI Interview Feedback</h2>

        <div className="feedback-grid">

          {interviewSession.answers.map((answer, index) => (

            <div
              key={index}
              className="feedback-card"
            >

              <h3>
                Question {index + 1}
              </h3>

              <p>
                <strong>Question:</strong>
                {" "}
                {answer.question}
              </p>

              <p>
                <strong>Your Answer:</strong>
                {" "}
                {answer.answer}
              </p>

              <div className="feedback-top-row">

                <div className="score-badge">
                  {answer.evaluation?.score ?? 0}/100
                </div>

                <div
                  className={`confidence-badge ${
                    (answer.evaluation?.confidence ?? "Low").toLowerCase()
                  }`}
                >
                  {answer.evaluation?.confidence ?? "Low"}
                </div>

              </div>

              <div className="feedback-section-title strengths">
                ✅ Strengths
              </div>

              <ul>
                {(answer.evaluation?.strengths ?? []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="feedback-section-title weaknesses">
                ⚠️ Weaknesses
              </div>

              <ul>
                {(answer.evaluation?.weaknesses ?? []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="feedback-section-title suggestions">
                💡 Suggestions
              </div>

              <ul>
                {(answer.evaluation?.suggestions ?? []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </div>

      {/* Buttons */}
      <div className="results-actions">

        <button
          className="review-btn"
          onClick={() => navigate("/interview-review")}
        >
          Review Interview
        </button>

        <button
          className="next-level-btn"
          onClick={() => navigate("/level-selection")}
        >
          Continue to Next Level →
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