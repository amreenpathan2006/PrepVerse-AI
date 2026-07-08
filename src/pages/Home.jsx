import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />

      <section className="hero">

  <img src={logo} alt="PrepVerse AI Logo" className="hero-logo" />

  <h1>PrepVerse AI</h1>

  <h2>One Platform. Every Career.</h2>

  <p>
    Practice AI-powered mock interviews for Engineering,
    Medical, UPSC, MBA, Banking, Law and many more.
  </p>
<button onClick={() => navigate("/career-profile")}>
  Start Free Interview
</button>
</section>
<section className="features">

  <h2>Why Choose PrepVerse AI?</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <h3>🎤 AI Mock Interviews</h3>
      <p>Practice realistic interviews with AI across multiple career domains.</p>
    </div>

    <div className="feature-card">
      <h3>📄 Resume Analysis</h3>
      <p>Get instant resume reviews and suggestions to improve your profile.</p>
    </div>

    <div className="feature-card">
      <h3>📊 Performance Reports</h3>
      <p>Track your interview scores and monitor your improvement over time.</p>
    </div>

    <div className="feature-card">
      <h3>🤖 Personalized Feedback</h3>
      <p>Receive AI-generated tips to improve your confidence and answers.</p>
    </div>

  </div>

</section>
    </div>
  );
}

export default Home;  