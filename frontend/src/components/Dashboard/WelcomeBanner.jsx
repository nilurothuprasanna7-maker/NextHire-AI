import "./WelcomeBanner.css";

function WelcomeBanner() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="welcome-banner">

      <div>

        <h1>
          👋 Welcome Back, {user.fullName || "User"}!
        </h1>

        <p>
          Continue your placement preparation today.
        </p>

      </div>

      <div className="readiness">

        <h2>Placement Readiness</h2>

        <span>82%</span>

      </div>

    </div>
  );
}

export default WelcomeBanner;