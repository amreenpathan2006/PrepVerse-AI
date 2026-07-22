import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSetup.css";

function ProfileSetup() {
    const [selectedResume, setSelectedResume] = useState(null);
    const navigate = useNavigate();

    const handleManualProfile = () => {
        // Temporary navigation
        // We will build the manual question flow later
        navigate("/profile/manual");
    };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, or DOCX file.");
        return;
    }

    setSelectedResume(file);

    console.log("Valid resume selected:", file.name);
};

    return (
        <div className="profile-setup-page">

            <div className="profile-setup-container">

                <div className="profile-setup-header">
                    <span className="profile-setup-badge">
                        PROFILE SETUP
                    </span>

                    <h1>
                        Let's get to know you
                    </h1>

                    <p>
                        Choose how you want to create your profile
                        before starting your interview journey.
                    </p>
                </div>


                <div className="profile-options">

                    {/* Resume Upload Option */}
                    <div className="profile-option-card">

                        <div className="profile-option-icon">
                            📄
                        </div>

                        <h2>
                            Upload Your Resume
                        </h2>

                        <p>
                            Already have a resume? Upload it and let
                            PrepVerse AI extract your profile details.
                        </p>

                        <label className="profile-option-button">
                            Upload Resume

                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleResumeUpload}
                            />
                        </label>
                        {selectedResume && (
    <button
        className="continue-resume-button"
        onClick={() => {
            console.log(
                "Continuing with resume:",
                selectedResume.name
            );
        }}
    >
        Continue with Resume →
    </button>
)}

                        {selectedResume ? (
    <span className="resume-selected-text">
        ✓ {selectedResume.name}
    </span>
) : (
    <span className="file-format-text">
        PDF, DOC, or DOCX
    </span>
)}
                    </div>


                    {/* Manual Profile Option */}
                    <div className="profile-option-card">

                        <div className="profile-option-icon">
                            ✨
                        </div>

                        <h2>
                            Build Your Profile
                        </h2>

                        <p>
                            Don't have a resume? No problem.
                            Answer a few questions and build your profile.
                        </p>

                        <button
                            className="profile-option-button"
                            onClick={handleManualProfile}
                        >
                            Enter Details Manually
                        </button>

                        <span className="file-format-text">
                            Takes only a few minutes
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProfileSetup;