import "./ChatInput.css";

function ChatInput({ input, setInput, handleSend }) {
  return (
    <div className="chat-input-container">

      <input
        type="text"
        placeholder="Type your answer..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button onClick={handleSend}>
        Send
      </button>

    </div>
  );
}

export default ChatInput;