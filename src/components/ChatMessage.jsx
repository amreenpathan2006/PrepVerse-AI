import "./ChatMessage.css";

function ChatMessage({ sender, text }) {
  return (
    <div className={sender === "ai" ? "ai-message" : "user-message"}>
      <div className={sender === "ai" ? "message" : "user-bubble"}>
        <p style={{ whiteSpace: "pre-line", margin: 0 }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;