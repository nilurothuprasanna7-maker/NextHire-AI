import DashboardLayout from "../layouts/DashboardLayout";

import WelcomeBanner from "../components/Dashboard/WelcomeBanner";
import ProgressChart from "../components/Dashboard/ProgressChart";
import NovaWidget from "../components/Dashboard/NovaWidget";
import DailyGoals from "../components/Dashboard/DailyGoals";
import QuickActions from "../components/Dashboard/QuickActions";
import RecommendedJobs from "../components/Dashboard/RecommendedJobs";
import PlacementNews from "../components/Dashboard/PlacementNews";

import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard-page">

        <WelcomeBanner />

        <div className="dashboard-grid">

          <div className="left-section">

            <ProgressChart />

            <DailyGoals />

            <PlacementNews />

          </div>

          <div className="right-section">

            <NovaWidget />

            <QuickActions />

            <RecommendedJobs />

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;