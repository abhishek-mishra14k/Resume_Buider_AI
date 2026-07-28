import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ResumeDetails from "./pages/ResumeDetails";
import JobMatcher from "./pages/JobMatcher";
import CoverLetter from "./pages/CoverLetter";
import InterviewQuestions from "./pages/InterviewQuestions";
import AIAnalyzer from "./pages/AIAnalyzer";
import Templates from "./pages/Templates";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/resume/:id" element={<ResumeDetails />} />
        <Route path="/resume-builder/:id" element={<ResumeBuilder />} />
        <Route path="/career-tools/job-matcher" element={<JobMatcher />} />
        <Route path="/career-tools/cover-letter" element={<CoverLetter />} />
        <Route path="/career-tools/interview" element={<InterviewQuestions />} />
        <Route path="/ai-analyzer" element={<AIAnalyzer />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;