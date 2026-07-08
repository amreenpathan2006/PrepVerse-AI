import Navbar from "../components/Navbar";

function Features() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Features</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🎤 AI Mock Interviews</li>
          <li>📄 Resume Analysis</li>
          <li>📊 Performance Dashboard</li>
          <li>🤖 Personalized AI Feedback</li>
          <li>📚 Domain-specific Interview Preparation</li>
        </ul>
      </div>
    </>
  );
}

export default Features;