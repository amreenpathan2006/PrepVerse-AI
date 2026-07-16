import { useState } from "react";
import "./InterviewControls.css";

function InterviewControls() {

  const [micOn, setMicOn] = useState(true);

  return (
    <div className="interview-controls">

      <button
        className={`control-btn mic ${micOn ? "active" : "inactive"}`}
        onClick={() => setMicOn(!micOn)}
      >
        {micOn ? "🎤" : "🔇"}
        <span>{micOn ? "Mic On" : "Mic Off"}</span>
      </button>

      <button className="control-btn speaker">
        🔊
        <span>Speaker</span>
      </button>

      <button className="control-btn pause">
        ⏸
        <span>Pause</span>
      </button>

      <button className="control-btn end">
        ❌
        <span>End</span>
      </button>

    </div>
  );
}

export default InterviewControls;