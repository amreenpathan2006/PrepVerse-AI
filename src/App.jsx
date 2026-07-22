import { Routes, Route } from "react-router-dom";
import InterviewSession from "./pages/Interview/InterviewSession";
import ChatScreen from "./pages/ChatScreen";
import Dashboard from "./pages/Dashboard/Dashboard";
import InterviewResults from "./components/InterviewResults/InterviewResults";
import InterviewReview from "./components/InterviewReview/InterviewReview";
import ProfileSetup from "./components/ProfileSetup/ProfileSetup";
import ManualProfile from "./components/ManualProfile/ManualProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview" element={<InterviewSession />} />
      <Route path="/interview-results" element={<InterviewResults />} />
      <Route path="/interview-review" element={<InterviewReview />}/>
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route
    path="/profile/manual"
    element={<ManualProfile />}
/>
    </Routes>

  );
}

export default App;