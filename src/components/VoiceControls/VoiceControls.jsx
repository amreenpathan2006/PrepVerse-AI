import "./VoiceControls.css";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

function VoiceControls({
  isMuted,
  isListening,
  onToggleMute,
}) {
  return (
    <div className="voice-controls">

      {!isMuted && (
  <div className="voice-waveform">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
)}

      <button
        className={`mic-btn ${isListening ? "listening" : ""}`}
        onClick={onToggleMute}
      >
        {isMuted ? (
          <FaMicrophoneSlash className="mic-icon" />
        ) : (
          <FaMicrophone className="mic-icon" />
        )}
      </button>

    </div>
  );
}

export default VoiceControls;