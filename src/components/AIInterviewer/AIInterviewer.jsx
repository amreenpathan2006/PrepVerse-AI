import "./AIInterviewer.css";
import InterviewerCard from "../Avatar/InterviewerCard";
import InterviewControls from "../InterviewControls/InterviewControls";

function AIInterviewer({
  state,
  isPaused,
  onTogglePause,
  onEndInterview,
}) {
  return (
    <div className="ai-interviewer">

      <InterviewerCard state={state} />

      <InterviewControls
  isPaused={isPaused}
  onTogglePause={onTogglePause}
  onEndInterview={onEndInterview}
/>

    </div>
  );
}

export default AIInterviewer;