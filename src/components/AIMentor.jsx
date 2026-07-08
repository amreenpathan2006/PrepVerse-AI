import { useState } from "react";
import careerProfileFields from "../data/careerProfileFields";
import WelcomeScreen from "./WelcomeScreen";
import "./AIMentor.css";

function AIMentor() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [answer, setAnswer] = useState("");

  const step = careerProfileFields[currentStep];

  const progress = Math.round(
    ((currentStep + 1) / careerProfileFields.length) * 100
  );

  const nextStep = () => {
    console.log(answer);

    setAnswer("");

    if (currentStep < careerProfileFields.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("🎉 Profile Completed!");
    }
  };

  if (showWelcome) {
    return (
      <WelcomeScreen
        onStart={() => setShowWelcome(false)}
      />
    );
  }

  return (
    <div className="mentor-container">

      <div className="mentor-header">

        <div className="mentor-avatar">
          👩‍💼
        </div>

        <div>
          <h1 className="mentor-title">
            Hi, I'm Prep
          </h1>

          <p className="mentor-subtitle">
            Let's build your personalized learning journey.
          </p>
        </div>

      </div>

      <div className="progress-info">

        <span>
          Step {currentStep + 1} of {careerProfileFields.length}
        </span>

        <span>
          {progress}% Complete
        </span>

      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="question-title">
        {step.title}
      </h2>

      {step.message && (
        <p className="question-label">
          {step.message}
        </p>
      )}

      {step.fields[0].type === "cards" ? (

        <div className="goal-grid">

          {step.fields[0].options.map((option, index) => (

            <div
              key={index}
              className="goal-button"
              onClick={() => {
                setSelectedGoal(option.title);
                setCurrentStep(1);
              }}
            >
              <h3>{option.title}</h3>

              <p>{option.description}</p>

              <div className="start-link">
                Start Journey →
              </div>

            </div>

          ))}

        </div>

      ) : (

        <>
          <p className="question-label">
            {step.fields[0].label}
          </p>

          <input
            className="answer-input"
            type={step.fields[0].type}
            placeholder={step.fields[0].placeholder}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            className="continue-btn"
            onClick={nextStep}
          >
            Continue →
          </button>

        </>

      )}

    </div>
  );
}

export default AIMentor;