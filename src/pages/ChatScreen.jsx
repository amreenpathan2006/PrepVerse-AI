import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

import "./ChatScreen.css";
import careerQuestions from "../data/careerQuestions";

function ChatScreen() {
  const navigate = useNavigate();
  const chatBodyRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: `👋 Hello Amreen!

I'm PrepVerse AI.

Let's discover the best career path for you. 🚀`,
    },
    {
      id: 2,
      sender: "ai",
      text: careerQuestions[0],
    },
  ]);

  const [input, setInput] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setUserAnswers((prev) => [...prev, input]);

    const nextQuestion = careerQuestions[currentQuestion];

    if (nextQuestion) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: nextQuestion,
          },
        ]);
      }, 800);

      setCurrentQuestion((prev) => prev + 1);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text:
              "🎉 Thank you! I have collected all your information. Preparing your personalized PrepVerse dashboard...",
          },
        ]);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }, 800);
    }

    setInput("");
  };

  return (
    <Layout>
      <div className="chat-screen">

        <div className="hero-section">
          <img
  src={logo}
  alt="PrepVerse AI"
  className="hero-logo"
/>

          <h1>PrepVerse AI</h1>

          <p>Your Personal AI Career Mentor</p>
        </div>

        <div className="chat-container">

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                sender={message.sender}
                text={message.text}
              />
            ))}
           {isTyping && (
  <div className="ai-message">
    <div className="message">

      <p
        style={{
          marginBottom: "12px",
          color: "#CBD5E1",
          fontSize: "14px"
        }}
      >
        PrepVerse AI is thinking...
      </p>

      <div className="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </div>
)}
          </div>

          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />

        </div>

      </div>
    </Layout>
  );
}

export default ChatScreen;