import "./InterviewRoom.css";
import { useState } from "react";

import Card from "../Card/Card";
import AIInterviewer from "../AIInterviewer/AIInterviewer";
import VoiceControls from "../VoiceControls/VoiceControls";
import EndInterviewModal from "../EndInterviewModal/EndInterviewModal";
import InterviewResults from "../InterviewResults/InterviewResults";
import useInterviewTimer from "../../hooks/useInterviewTimer";
import levelOneQuestions from "../data/interviewQuestions";
import levelTwoQuestions from "../data/levelTwoQuestions";
import { generateQuestions } from "../../utils/questionGenerator";
import useQuestionProgress from "../../hooks/useQuestionProgress";
import { saveInterviewSession } from "../../utils/interviewStorage";


function InterviewRoom({ level }) {
 const baseQuestions =
  level === 2
    ? levelTwoQuestions
    : levelOneQuestions;

const interviewQuestions = generateQuestions(baseQuestions);
  // -----------------------------
  // State
  // -----------------------------
  // -----------------------------
  // State
  // -----------------------------
 const [interviewSession, setInterviewSession] = useState({
  level: level,

  interviewType:
    level === 1
      ? "Confidence Builder Interview"
      : "Professional Interview",

  totalQuestions: interviewQuestions.length,

  startTime: new Date(),

  endTime: null,

  answers: [],
});
  const [isMuted, setIsMuted] = useState(false);
  const [isListening, setIsListening] = useState(true);
  const [status, setStatus] = useState("Listening");
  const aiState = isMuted ? "ready" : "listening";
  const [isPaused, setIsPaused] = useState(false);
  const [showEndConfirmation, setShowEndConfirmation] = useState(false);
  const [isInterviewEnded, setIsInterviewEnded] = useState(false);
  const { timeLeft, formattedTime } = useInterviewTimer(
  15 * 60,
  isPaused,
  isInterviewEnded
);

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

  const completedSession = {
    ...interviewSession,
    endTime: new Date(),
  };

  saveInterviewSession(completedSession);

  setInterviewSession(completedSession);
  setIsInterviewEnded(true);
};
  
  
  // -----------------------------
  // Question Progress
  // -----------------------------
  
const totalQuestions = interviewQuestions.length;

const {
  currentQuestionIndex,
  nextQuestion,
  progress,
} = useQuestionProgress(totalQuestions);

const currentQuestionData =
  interviewQuestions[currentQuestionIndex];

const handleNextQuestion = () => {
 const currentQuestionData =
  interviewQuestions[currentQuestionIndex];

  const newAnswer = {
  questionId: currentQuestionData.id,
  question: currentQuestionData.question,
  category: currentQuestionData.category,
  difficulty: currentQuestionData.difficulty,
  answer: "Demo user response",
  answerDuration: 0,
  answeredAt: new Date().toISOString(),
};


  setInterviewSession((prev) => ({
    ...prev,
    answers: [...prev.answers, newAnswer],
  }));

  if (currentQuestionIndex < totalQuestions - 1) {
  nextQuestion();
  } else {
    const completedSession = {
  ...interviewSession,
  answers: [
    ...interviewSession.answers,
    newAnswer,
  ],
  endTime: new Date(),
};

saveInterviewSession(completedSession);

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
            <h2>
  {level === 1
    ? "Confidence Builder Interview"
    : "Professional Interview"}
</h2>

            <p>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
            <div className="question-info">
  <span>
    <strong>Category:</strong>{" "}
    {currentQuestionData.category}
  </span>

  <span>
    <strong>Difficulty:</strong>{" "}
    {currentQuestionData.difficulty}
  </span>
</div>
          </div>

          <div className="header-right">
            <span>
              {formattedTime}
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
              {currentQuestionData.aiPrompt}
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
                 {currentQuestionIndex + 1 === totalQuestions
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