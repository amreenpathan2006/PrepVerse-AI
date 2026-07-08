import { Routes, Route } from "react-router-dom";

import ChatScreen from "./pages/ChatScreen";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;