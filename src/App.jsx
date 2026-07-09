import { Routes, Route } from "react-router-dom";
import InterviewSession from "./pages/Interview/InterviewSession";
import ChatScreen from "./pages/ChatScreen";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview" element={<InterviewSession />} />
    </Routes>
  );
}

export default App;