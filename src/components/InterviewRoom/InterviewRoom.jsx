import "./InterviewRoom.css";
import { useState, useEffect } from "react";

import Card from "../Card/Card";
import AIInterviewer from "../AIInterviewer/AIInterviewer";
import VoiceControls from "../VoiceControls/VoiceControls";

function InterviewRoom() {
  // -----------------------------
  // State
  // -----------------------------
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(true);
  const [status, setStatus] = useState("Listening");
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  // -----------------------------
  // Handlers
  // -----------------------------
  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // -----------------------------
  // Timer
  // -----------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // -----------------------------
  // Time Formatting
  // -----------------------------
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="interview-room">
      <Card className="interviewer-panel">
        <AIInterviewer state="ready" />
      </Card>

      <Card className="conversation-panel">
        <div className="conversation-header">
          <h2>Frontend Developer Interview</h2>

          <span>{minutes}:{seconds}</span>
        </div>

        <div className="conversation-body">
          <div className="conversation-message ai">
            <strong>Amreen</strong>

            <p>
              Hello! Welcome to PrepVerse AI.
              <br />
              <br />
              Tell me about yourself.
            </p>
          </div>

          <div className="conversation-message user">
            <strong>You</strong>

            <p>Your response will appear here...</p>
          </div>
        </div>

        <div className="voice-area">
          <VoiceControls
            isMuted={isMuted}
            isListening={isListening}
            onToggleMute={handleToggleMute}
          />
        </div>

        <div className="conversation-footer">
          <div className="interview-status">
            <span className="status-dot"></span>
            {status}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default InterviewRoom;