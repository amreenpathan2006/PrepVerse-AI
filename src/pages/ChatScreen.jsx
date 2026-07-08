import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatScreen.css";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import careerQuestions from "../data/careerQuestions";

function ChatScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: `👋 Hello Amreen!

I'm PrepVerse AI.

Let's discover the best career path for you. 🚀`
    },
    {
      id: 2,
      sender: "ai",
      text: careerQuestions[0]
    }
  ]);

  const [input, setInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSend = () => {

    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setUserAnswers(prev => [...prev, input]);

    const nextQuestion = careerQuestions[currentQuestion];

if (nextQuestion) {

  setTimeout(() => {
    console.log("User Answers:", userAnswers);

    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "ai",
        text: nextQuestion
      }
    ]);

  }, 800);

  setCurrentQuestion(currentQuestion + 1);

} else {

  setTimeout(() => {

    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "ai",
        text:
          "🎉 Thank you! I have collected all your information. Preparing your personalized PrepVerse dashboard..."
      }
    ]);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

  }, 800);
}

setInput("");
  };

  return (
    <div className="chat-screen">

      <div className="chat-header">
        <img
          src="/logo192.png"
          alt="AI"
          className="ai-avatar"
        />

        <div>
          <h2>PrepVerse AI</h2>
          <p>Your Personal Career Mentor</p>
        </div>
      </div>

      <div className="chat-body">

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))}

      </div>

      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />

    </div>
  );
}

export default ChatScreen;