import DashboardLayout from "../layouts/DashboardLayout";
import ProfileCard from "../components/Profile/ProfileCard";
import MentorCard from "../components/Dashboard/MentorCard";
import { dashboardStats } from "../components/Dashboard/dashboardData";

import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <ProfileCard />

        <div className="dashboard-right">
          <h1>Welcome Back 👋</h1>

          <p>Track your placement preparation with NextHire AI.</p>

          <div className="stats-grid">
            {dashboardStats.map((item) => {
              const Icon = item.icon;

              return (
                <div className="dashboard-card" key={item.id}>
                  <div
                    className="dashboard-card-icon"
                    style={{ background: item.color }}
                  >
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>
                  <h2>{item.value}</h2>
                </div>
              );
            })}
          </div>

          <MentorCard />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;