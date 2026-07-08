import { useNavigate } from "react-router-dom";
import "./DashboardCards.css";

function DashboardCards() {
  const navigate = useNavigate();
  const cards = [
  {
    title: "Continue Interview",
    description: "Resume your latest AI interview session.",
    icon: "💬",
    path: "/chat",
  },
  {
    title: "Resume Builder",
    description: "Create an ATS-friendly professional resume.",
    icon: "📄",
    path: "/resume",
  },
  {
    title: "AI Career Roadmap",
    description: "See your personalized learning journey.",
    icon: "🛣️",
    path: "/roadmap",
  },
  {
    title: "Mock Interviews",
    description: "Practice domain-specific interviews.",
    icon: "🎯",
    path: "/interview",
  },
  {
    title: "Performance",
    description: "Track your interview progress and scores.",
    icon: "📊",
    path: "/performance",
  },
];

  return (
    <div className="dashboard-cards">
      {cards.map((card, index) => (
        <div
          className="dashboard-card"
           key={index}
           onClick={() => navigate(card.path)}
        >
          <div className="card-icon">{card.icon}</div>
          <h3>{card.title}</h3>

          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;