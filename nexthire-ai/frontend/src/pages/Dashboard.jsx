import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Topbar from "../components/Dashboard/Topbar/Topbar";
import StatsCards from "../components/Dashboard/Cards/StatsCards";
import ProgressWidgets from "../components/Dashboard/Widgets/ProgressWidgets";

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "270px",
          flex: 1,
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "35px",
          }}
        >
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;