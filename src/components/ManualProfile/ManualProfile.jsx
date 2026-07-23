import React, { useState } from "react";
import "./ManualProfile.css";

function ManualProfile() {
    const [isStarted, setIsStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
const [showSummary, setShowSummary] = useState(false);
    const [profileData, setProfileData] = useState({
        fullName: "",
        email: "",
        phone: "",
        education: "",
        skills: "",
        projects: "",
        experience: "",
        certifications: "",
        careerGoals: ""
    });

    const questions = [
        {
            key: "fullName",
            question: "What is your full name?",
            description:
                "This will be used to personalize your PrepVerse AI experience.",
            placeholder: "Enter your full name",
            type: "text"
        },
        {
            key: "email",
            question: "What is your email address?",
            description:
                "We'll use this to keep your profile information organized.",
            placeholder: "Enter your email address",
            type: "email"
        },
        {
            key: "phone",
            question: "What is your phone number?",
            description:
                "This information can be included in your professional profile.",
            placeholder: "Enter your phone number",
            type: "tel"
        },
        {
            key: "education",
            question: "Tell us about your education.",
            description:
                "Mention your degree, college, and current year of study.",
            placeholder: "Example: B.Tech in CSE, 3rd Year",
            type: "text"
        },
        {
            key: "skills",
            question: "What are your technical skills?",
            description:
                "List the programming languages, tools, and technologies you know.",
            placeholder: "Example: Python, Java, React, SQL",
            type: "text"
        },
        {
            key: "projects",
            question: "Tell us about your projects.",
            description:
                "Describe projects you have built or worked on.",
            placeholder: "Example: AI Interview Preparation Platform",
            type: "text"
        },
        {
            key: "experience",
            question: "Do you have any work experience?",
            description:
                "You can mention internships, part-time work, or other experience.",
            placeholder: "Describe your experience",
            type: "text"
        },
        {
            key: "certifications",
            question: "Do you have any certifications?",
            description:
                "Mention relevant certifications or courses you have completed.",
            placeholder: "Example: Python Certification",
            type: "text"
        },
        {
            key: "careerGoals",
            question: "What are your career goals?",
            description:
                "Tell us what kind of career or role you want to pursue.",
            placeholder: "Example: I want to become an AI Engineer",
            type: "text"
        }
    ];

    const currentQuestionData = questions[currentQuestion];

    const currentAnswer =
        profileData[currentQuestionData.key];

    const handleAnswerChange = (event) => {
        setProfileData({
            ...profileData,
            [currentQuestionData.key]: event.target.value
        });
    };

    const handleContinue = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            console.log("Profile Completed:", profileData);
            setIsCompleted(true);
        }
    };

    return (
        <div className="manual-profile-page">

            <div className="manual-profile-container">

                <span className="manual-profile-badge">
                    PROFILE SETUP
                </span>
                

                {showSummary ? (

    <div className="profile-summary-card">

        <h1>
            Review Your Profile
        </h1>

        <p>
            Check your information before continuing.
        </p>

        <div className="profile-summary-list">

            <div className="summary-item">
                <span>👤 Full Name</span>
                <strong>{profileData.fullName}</strong>
            </div>

            <div className="summary-item">
                <span>📧 Email</span>
                <strong>{profileData.email}</strong>
            </div>

            <div className="summary-item">
                <span>📱 Phone</span>
                <strong>{profileData.phone}</strong>
            </div>

            <div className="summary-item">
                <span>🎓 Education</span>
                <strong>{profileData.education}</strong>
            </div>

            <div className="summary-item">
                <span>💻 Skills</span>
                <strong>{profileData.skills}</strong>
            </div>

            <div className="summary-item">
                <span>🚀 Projects</span>
                <strong>{profileData.projects}</strong>
            </div>

            <div className="summary-item">
                <span>💼 Experience</span>
                <strong>{profileData.experience}</strong>
            </div>

            <div className="summary-item">
                <span>🏆 Certifications</span>
                <strong>{profileData.certifications}</strong>
            </div>

            <div className="summary-item">
                <span>🎯 Career Goals</span>
                <strong>{profileData.careerGoals}</strong>
            </div>

        </div>

        <button
            className="manual-profile-button"
            onClick={() => {
                console.log("Final Profile:", profileData);
            }}
        >
            Confirm Profile ✓
        </button>

    </div>

) : isCompleted ? (

                    <div className="profile-complete-card">

                        <div className="completion-icon">
                            ✓
                        </div>

                        <h1>
                            Profile Complete!
                        </h1>

                        <p>
                            Your professional profile has been successfully created.
                        </p>

                        <div className="completion-summary">
                            <span>✓</span>

                            <p>
                                Your information is ready for your personalized
                                interview preparation experience.
                            </p>
                        </div>

                       <button
    className="manual-profile-button"
    onClick={() => setShowSummary(true)}
>
    Review My Profile →
</button>
                    </div>

                ) : !isStarted ? (

                    <>
                        <h1>
                            Let's build your profile
                        </h1>

                        <p>
                            We'll ask you a few questions to understand
                            your background and create your interview profile.
                        </p>

                        <div className="manual-profile-card">

                            <div className="manual-profile-icon">
                                👤
                            </div>

                            <h2>
                                Ready to get started?
                            </h2>

                            <p>
                                This process will take only a few minutes.
                            </p>

                            <button
                                className="manual-profile-button"
                                onClick={() => setIsStarted(true)}
                            >
                                Begin Profile Setup →
                            </button>

                        </div>
                    </>

                ) : (

                    <div className="question-card">

                        <div className="question-progress">

                            <span>
                                Question {currentQuestion + 1} of {questions.length}
                            </span>

                            <span>
                                {Math.round(
                                    ((currentQuestion + 1) / questions.length) * 100
                                )}%
                            </span>

                        </div>

                        <div className="progress-bar">

                            <div
                                className="progress-fill"
                                style={{
                                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                                }}
                            ></div>

                        </div>

                        <h1>
                            {currentQuestionData.question}
                        </h1>

                        <p>
                            {currentQuestionData.description}
                        </p>

                        <input
                            type={currentQuestionData.type}
                            className="profile-input"
                            placeholder={currentQuestionData.placeholder}
                            value={currentAnswer}
                            onChange={handleAnswerChange}
                        />

                        <button
                            className="manual-profile-button"
                            disabled={!currentAnswer.trim()}
                            onClick={handleContinue}
                        >
                            {currentQuestion === questions.length - 1
                                ? "Complete Profile ✓"
                                : "Continue →"}
                        </button>

                    </div>

                )}

            </div>

        </div>
    );
}

export default ManualProfile;