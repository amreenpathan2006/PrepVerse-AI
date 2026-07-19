import "./InterviewControls.css";

function InterviewControls({
  isPaused,
  onTogglePause,
  onEndInterview,
}) {
  return (
    <div className="interview-controls">

      <button
        className="control-btn pause-btn"
        onClick={onTogglePause}
      >
        {isPaused ? "▶ Resume" : "⏸ Pause"}
      </button>

      <button
  className="control-btn end-btn"
  onClick={onEndInterview}
>
  ⏹ End Interview
</button>

    </div>
  );
}

export default InterviewControls;