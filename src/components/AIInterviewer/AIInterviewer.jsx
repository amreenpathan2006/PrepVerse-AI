import "./AIInterviewer.css";
import InterviewerCard from "../Avatar/InterviewerCard";
import InterviewControls from "../InterviewControls/InterviewControls";

function AIInterviewer() {
  return (
    <div className="ai-interviewer">
      <InterviewerCard />
      <InterviewControls />
    </div>
  );
}

export default AIInterviewer;