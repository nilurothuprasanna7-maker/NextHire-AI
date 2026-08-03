import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/Dashboard/Cards/StatsCards";
import ProgressWidgets from "../components/Dashboard/Widgets/ProgressWidgets";
import RecentActivity from "../components/Dashboard/Widgets/RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1
        style={{
          color: "white",
          marginBottom: "10px",
        }}
      >
        Welcome Back 👋
      </h1>

      <p
        style={{
          color: "#9aa6c5",
          marginBottom: "35px",
        }}
      >
        Here's an overview of your placement preparation.
      </p>

      <StatsCards />

      <ProgressWidgets />

      <RecentActivity />
    </DashboardLayout>
  );
}

export default Dashboard;