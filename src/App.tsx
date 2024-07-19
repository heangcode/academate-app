import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Score from "./pages/Score";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import StudentProfile from "./pages/StudentProfile";
import AttendanceList from "./pages/AttendanceList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />}>
          <Route path="attendance-list" element={<AttendanceList />} />
        </Route>
        <Route path="/score" element={<Score />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/student-profile/:id" element={<StudentProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
