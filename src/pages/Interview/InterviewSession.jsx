import "./InterviewSession.css";
import Layout from "../../components/Layout/Layout";
import InterviewRoom from "../../components/InterviewRoom/InterviewRoom";
import { useLocation } from "react-router-dom";

function InterviewSession() {
  const location = useLocation();

  const level = location.state?.level || 1;

  return (
    <Layout>
      <InterviewRoom level={level} />
    </Layout>
  );
}

export default InterviewSession;