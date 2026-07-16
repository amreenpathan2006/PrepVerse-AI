import "./InterviewerCard.css";

function InterviewerCard() {
  return (
    <div className="interviewer-card">

      <div className="avatar-display">
        <div className="avatar-circle">
          AI
        </div>
      </div>

      <h2>Amreen</h2>

      <p>Senior AI Interviewer</p>

      <div className="status-pill">
        🟢 Ready to Interview
      </div>

    </div>
  );
}

export default InterviewerCard;