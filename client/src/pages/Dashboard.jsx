import { useEffect, useState } from "react";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";
import CareerTools from "../components/dashboard/CareerTools";
import RecentResumes from "../components/dashboard/RecentResumes";


function Dashboard() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const res = await api.get("/resume");
      setResumes(res.data.resumes || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setResumes((prev) =>
      prev.filter((resume) => resume._id !== id)
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
      <div className="mx-auto max-w-7xl space-y-12 px-6">

        {/* Hero */}
        <DashboardHeader user={user} />

        {/* Statistics */}
        <DashboardStats resumes={resumes} />

        {/* Quick Actions */}
        <QuickActions />

        {/* AI Career Tools */}
        <CareerTools />

        {/* Resume List */}
        <RecentResumes
          resumes={resumes}
          onDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default Dashboard;