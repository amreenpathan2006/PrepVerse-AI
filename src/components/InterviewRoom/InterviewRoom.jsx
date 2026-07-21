import "./InterviewRoom.css";
import { useState, useEffect } from "react";

import Card from "../Card/Card";
import AIInterviewer from "../AIInterviewer/AIInterviewer";
import VoiceControls from "../VoiceControls/VoiceControls";
import EndInterviewModal from "../EndInterviewModal/EndInterviewModal";
import InterviewResults from "../InterviewResults/InterviewResults";
import interviewQuestions from "../data/interviewQuestions";

function InterviewRoom() {
  // -----------------------------
  // State
  // -----------------------------
  const [interviewSession, setInterviewSession] = useState({
  interviewType: "Frontend Developer Interview",
  totalQuestions: interviewQuestions.length,
  startTime: new Date(),
  endTime: null,
  answers: [],
});
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(true);
  const [status, setStatus] = useState("Listening");

  const aiState = isMuted ? "ready" : "listening";

  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [showEndConfirmation, setShowEndConfirmation] = useState(false);
  const [isInterviewEnded, setIsInterviewEnded] = useState(false);

  // -----------------------------
  // Handlers
  // -----------------------------
  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleEndInterview = () => {
    setShowEndConfirmation(true);
  };

  const handleConfirmEndInterview = () => {
    setShowEndConfirmation(false);
    setIsInterviewEnded(true);
  };
  

  // -----------------------------
  // Timer
  // -----------------------------
  useEffect(() => {
    if (isPaused || isInterviewEnded) return;

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
  }, [isPaused, isInterviewEnded]);
  

  // -----------------------------
  // Time Formatting
  // -----------------------------
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // -----------------------------
  // Question Progress
  // -----------------------------
  
  const [currentQuestion, setCurrentQuestion] = useState(1);

const totalQuestions = interviewQuestions.length;

const currentQuestionData =
  interviewQuestions[currentQuestion - 1];

const progress =
  (currentQuestion / totalQuestions) * 100;

const handleNextQuestion = () => {
  const currentQuestionData =
    interviewQuestions[currentQuestion - 1];

  const newAnswer = {
    questionId: currentQuestionData.id,
    question: currentQuestionData.question,
    answer: "Demo user response",
  };


  setInterviewSession((prev) => ({
    ...prev,
    answers: [...prev.answers, newAnswer],
  }));

  if (currentQuestion < totalQuestions) {
    setCurrentQuestion((prev) => prev + 1);
  } else {
    const completedSession = {
  ...interviewSession,
  answers: [
    ...interviewSession.answers,
    newAnswer,
  ],
  endTime: new Date(),
};

sessionStorage.setItem(
  "interviewSession",
  JSON.stringify(completedSession)
);

setInterviewSession(completedSession);
setIsInterviewEnded(true);
    console.log("Current Interview Session:", interviewSession);
  }
};
  // -----------------------------
  // Results Screen
  // -----------------------------
 if (isInterviewEnded) {
  return (
    <InterviewResults
      interviewSession={interviewSession}
    />
  );
}

  // -----------------------------
  // Interview Room
  // -----------------------------
  return (
    <div className={`interview-room ${isPaused ? "paused" : ""}`}>

      {/* Interviewer Panel */}
      <Card className="interviewer-panel">
        <AIInterviewer
          state={aiState}
          isPaused={isPaused}
          onTogglePause={handleTogglePause}
          onEndInterview={handleEndInterview}
        />
      </Card>

      {/* Conversation Panel */}
      <Card className="conversation-panel">

        <div className="conversation-header">

          <div className="header-left">
            <h2>Frontend Developer Interview</h2>

            <p>
              Question {currentQuestion} of {totalQuestions}
            </p>
          </div>

          <div className="header-right">
            <span>
              {minutes}:{seconds}
            </span>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="interview-progress">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Conversation */}
        <div className="conversation-body">

          <div className="conversation-message ai">

            <div className="message-label">
              <span className="message-avatar">A</span>
              <strong>Amreen</strong>
            </div>

            <p>
              Hello! Welcome to PrepVerse AI.
              <br />
              <br />
              {currentQuestionData.question}
            </p>

          </div>

          <div className="conversation-message user">

            <div className="message-label">
              <span className="message-avatar">Y</span>
              <strong>You</strong>
            </div>

            <p>
              Your response will appear here...
            </p>

          </div>

        </div>

        {/* Voice Interaction Area */}
        <div className="voice-area">

          <div className="voice-interaction-area">

            <div className="voice-status-text">
              {isPaused
                ? "Interview Paused"
                : isMuted
                ? "Microphone Muted"
                : status}
            </div>
              <VoiceControls
                isMuted={isMuted}
               isListening={isListening}
               onToggleMute={handleToggleMute}
             />
             <button
                 className="next-question-button"
                  onClick={handleNextQuestion}
                      >
                {currentQuestion === totalQuestions
                ? "Finish Interview"
                : "Submit Answer & Continue"}
              </button>
           

          </div>

        </div>

      </Card>

      {/* End Interview Confirmation Modal */}
      {showEndConfirmation && (
        <EndInterviewModal
          onCancel={() => setShowEndConfirmation(false)}
          onConfirm={handleConfirmEndInterview}
        />
      )}

    </div>
  );
}

export default InterviewRoom;