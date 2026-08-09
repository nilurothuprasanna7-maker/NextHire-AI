import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Topbar from "../components/Dashboard/Topbar/Topbar";
import MentorRobot from "../components/AIMentor/MentorRobot";

import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <div className="dashboard-content">
          {children}
        </div>

      </div>

      {/* AI Mentor Robot */}
      <MentorRobot />

    </div>
  );
}

export default DashboardLayout;