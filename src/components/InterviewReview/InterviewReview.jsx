import "./InterviewReview.css";

function InterviewReview() {
  return (
    <div className="interview-review">

      {/* Header */}

      <div className="review-header">

        <h1>Interview Review</h1>

        <p>
          Detailed analysis of your interview performance.
        </p>

      </div>

      {/* Overall Performance */}

      <div className="review-overall-score">

        <div className="review-score-circle">

          <span>78</span>

          <small>/ 100</small>

        </div>

        <div>

          <h2>Overall Performance</h2>

          <p>
            You performed well. Continue practicing to improve
            your confidence and answer quality.
          </p>

        </div>

      </div>

      {/* Performance Scores */}

      <div className="review-performance-metrics">

        <div className="review-metric-card">

          <span className="review-metric-icon">
            🎤
          </span>

          <h3>82%</h3>

          <p>Confidence</p>
          <div className="score-progress">
    <div
      className="score-progress-fill"
      style={{ width: "82%" }}
    ></div>
  </div>

        </div>

        <div className="review-metric-card">

          <span className="review-metric-icon">
            💬
          </span>

          <h3>76%</h3>

          <p>Communication</p>
          <div className="score-progress">
    <div
      className="score-progress-fill"
      style={{ width: "76%" }}
    ></div>
  </div>

        </div>

        <div className="review-metric-card">

          <span className="review-metric-icon">
            🧠
          </span>

          <h3>75%</h3>

          <p>Answer Quality</p>
          <div className="score-progress">
    <div
      className="score-progress-fill"
      style={{ width: "75%" }}
    ></div>
  </div>

        </div>

      </div>

      {/* AI Feedback */}

      <div className="review-feedback">

        <h2>🤖 AI Feedback</h2>

        <p>
          You demonstrated good participation throughout the interview.
          Your confidence was good, but your answers can become stronger
          by using a clearer structure and providing more specific examples.
        </p>

      </div>

      {/* Strengths and Improvements */}

      <div className="review-insights">

        <div className="review-insight-card">

          <h2>💪 Strengths</h2>

          <p>
            You showed willingness to communicate and maintained
            good participation during the interview.
          </p>

        </div>

        <div className="review-insight-card">

          <h2>📈 Areas to Improve</h2>

          <p>
            Focus on structuring your answers clearly and adding
            more detail to your responses.
          </p>

        </div>

      </div>

      {/* Question Review */}

      <div className="question-review">

        <h2>📝 Question Review</h2>

        <div className="question-card">

          <div className="question-header">

            <span>Question 1</span>

            <span className="question-status">
              Completed
            </span>

          </div>

          <h3>
            Tell me about yourself.
          </h3>

          <div className="answer-box">

            <span>Your Answer</span>

            <p>
              Your recorded answer will appear here after
              speech-to-text processing is connected.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InterviewReview;