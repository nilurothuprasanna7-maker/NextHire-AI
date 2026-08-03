import DashboardLayout from "../layouts/DashboardLayout";

import ProfileCard from "../components/Profile/ProfileCard";
import ResumeProgress from "../components/Profile/ResumeProgress";

import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard-page">

        <ProfileCard />

        <ResumeProgress />

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;