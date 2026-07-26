import React from "react";
import { useNavigate } from "react-router-dom";
import "./LevelSelection.css";

function LevelSelection() {
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    if (level === 1) {
      navigate("/interview", {
        state: { level: 1 },
      });
    }

    if (level === 2) {
      navigate("/interview", {
        state: { level: 2 },
      });
    }
  };

  return (
    <div className="level-selection-page">
      <div className="level-selection-container">

        <div className="level-selection-header">
          <span className="level-badge">INTERVIEW JOURNEY</span>

          <h1>Choose Your Interview Level</h1>

          <p>
            Start where you are and grow your confidence step by step.
          </p>
        </div>

        <div className="levels-grid">

          {/* Level 1 */}
          <div className="level-card level-one">

            <div className="level-number">01</div>

            <div className="level-content">

              <span className="level-status available">
                AVAILABLE
              </span>

              <h2>Confidence Builder</h2>

              <p>
                Build your confidence with simple interview questions
                and improve your communication skills.
              </p>

              <div className="level-features">
                <span>✓ Basic Questions</span>
                <span>✓ Confidence Building</span>
                <span>✓ Communication Practice</span>
              </div>

              <button
                className="level-button"
                onClick={() => handleLevelSelect(1)}
              >
                Start Level 1 →
              </button>

            </div>

          </div>

          {/* Level 2 */}
          <div className="level-card level-two">

            <div className="level-number">02</div>

            <div className="level-content">

              <span className="level-status available">
                AVAILABLE
              </span>

              <h2>Professional Interview</h2>

              <p>
                Experience realistic interview questions based on
                your profile and career goals.
              </p>

              <div className="level-features">
                <span>✓ Realistic Questions</span>
                <span>✓ Profile-Based Interview</span>
                <span>✓ Detailed Evaluation</span>
              </div>

              <button
                className="level-button"
                onClick={() => handleLevelSelect(2)}
              >
                Start Level 2 →
              </button>

            </div>

          </div>

          {/* Level 3 */}
          <div className="level-card level-three">

            <div className="level-number">03</div>

            <div className="level-content">

              <span className="level-status locked">
                LOCKED
              </span>

              <h2>Advanced Challenge</h2>

              <p>
                Take on advanced domain-specific interviews designed
                to challenge your skills.
              </p>

              <div className="level-features">
                <span>✓ Advanced Questions</span>
                <span>✓ Domain Specific</span>
                <span>✓ Expert Evaluation</span>
              </div>

              <button
                className="level-button disabled"
                disabled
              >
                Locked
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LevelSelection;