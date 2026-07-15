import "./InterviewRoom.css";
import Card from "../Card/Card";
import AIInterviewer from "../AIInterviewer/AIInterviewer";

function InterviewRoom() {
  return (
    <div className="interview-room">

      <Card className="interviewer-panel">
        <AIInterviewer state="ready" />
      </Card>

      <Card className="conversation-panel">

        <div className="conversation-header">
          <h2>Frontend Developer Interview</h2>

          <span>15:00</span>
        </div>

        <div className="conversation-body">

  <div className="conversation-message ai">

    <strong>Amreen</strong>

    <p>
      Hello! Welcome to PrepVerse AI.
      <br /><br />
      Tell me about yourself.
    </p>

  </div>

  <div className="conversation-message user">

    <strong>You</strong>

    <p>
      Your response will appear here...
    </p>

  </div>

</div>

<div className="conversation-footer">

  <div className="mic-placeholder">

      🎤 Ready

  </div>

</div>
      </Card>

    </div>
  );
}

export default InterviewRoom;