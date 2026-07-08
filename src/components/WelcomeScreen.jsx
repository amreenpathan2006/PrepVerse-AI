import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import buildUserProfile from "../utils/buildUserProfile";
import "./WelcomeScreen.css";

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-container">

      <div className="welcome-avatar">
        👩‍💼
      </div>

      <h1>Hi, I'm Prep</h1>

      <h2>Your Personal AI Career Mentor</h2>

      <p>
        Welcome to <strong>PrepVerse AI</strong>.
      </p>

      <p>
        I'll help you build confidence,
        create a professional resume,
        improve your communication,
        and prepare for interviews.
      </p>

      <p>
        Every journey is personalized just for you.
      </p>

      <button
        className="begin-btn"
        onClick={onStart}
      >
        Let's Begin →
      </button>

    </div>
  );
}

export default WelcomeScreen;