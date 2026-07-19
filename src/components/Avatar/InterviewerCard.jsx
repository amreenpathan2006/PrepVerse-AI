import "./InterviewerCard.css";

function InterviewerCard({ state = "ready" }) {
  const statusConfig = {
    ready: {
      label: "Ready to Interview",
      className: "ready",
    },

    speaking: {
      label: "Amreen is Speaking",
      className: "speaking",
    },

    listening: {
      label: "Listening to You",
      className: "listening",
    },

    thinking: {
      label: "Thinking...",
      className: "thinking",
    },
  };

  const currentStatus =
    statusConfig[state] || statusConfig.ready;

  return (
    <div
      className={`interviewer-card ${currentStatus.className}`}
    >
      <div className="avatar-display">
        <div className="avatar-circle">
          AI
        </div>
      </div>

      <h2>Amreen</h2>

      <p>Senior AI Interviewer</p>

      <div className="status-pill">
        <span className="status-indicator"></span>

        {currentStatus.label}
      </div>
    </div>
  );
}

export default InterviewerCard;