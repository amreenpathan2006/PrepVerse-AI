import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManualProfile.css";

function ManualProfile() {
    const navigate = useNavigate();

    return (
        <div className="manual-profile-page">

            <div className="manual-profile-container">

                <span className="manual-profile-badge">
                    PROFILE SETUP
                </span>

                <h1>
                    Let's build your profile
                </h1>

                <p>
                    We'll ask you a few questions to understand
                    your background and create your interview profile.
                </p>

                <div className="manual-profile-card">

                    <div className="manual-profile-icon">
                        ✨
                    </div>

                    <h2>
                        Ready to get started?
                    </h2>

                    <p>
                        This process will take only a few minutes.
                    </p>

                    <button
                        className="manual-profile-button"
                        onClick={() => {
                            console.log(
                                "Manual profile questionnaire will begin"
                            );
                        }}
                    >
                        Begin Profile Setup →
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ManualProfile;