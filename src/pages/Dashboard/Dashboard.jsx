import Layout from "../../components/Layout/Layout";
import DashboardCards from "./DashboardCards/DashboardCards";
import "./Dashboard.css";

function Dashboard() {
 return (
  <Layout>
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Welcome Back, Amreen 👋</h1>
          <p>Let's continue your interview preparation.</p>
        </div>

        <button className="start-btn">
          + Start New Interview
        </button>
      </div>

      <div className="stats">

        <div className="card">
          <h3>0</h3>
          <p>Mock Interviews</p>
        </div>

        <div className="card">
          <h3>0%</h3>
          <p>Average Score</p>
        </div>

        <div className="card">
          <h3>0</h3>
          <p>Practice Hours</p>
        </div>

        <div className="card">
          <h3>🔥 0</h3>
          <p>Day Streak</p>
        </div>

      </div>

      <div className="section">
        <DashboardCards />

        <h2>Quick Actions</h2>

        <div className="action-grid">

          <div className="action-card">
            🎤
            <h3>HR Interview</h3>
            <p>Practice HR questions.</p>
          </div>

          <div className="action-card">
            💻
            <h3>Technical Interview</h3>
            <p>Practice coding & core subjects.</p>
          </div>

          <div className="action-card">
            🧠
            <h3>Aptitude</h3>
            <p>Improve reasoning and aptitude.</p>
          </div>

          <div className="action-card">
            📊
            <h3>Performance</h3>
            <p>View detailed analytics.</p>
          </div>

        </div>

      </div>

    </div>
  </Layout>
);
}
export default Dashboard;