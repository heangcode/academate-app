import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForgotPassword, ResetPassword, SignIn } from "./components";
import {
  Attendance,
  AttendanceList,
  Calendar,
  Classes,
  Dashboard,
  Score,
  Settings,
  StudentProfile,
  Students,
} from "./pages";

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
