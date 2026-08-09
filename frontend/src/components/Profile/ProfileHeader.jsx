import "./ProfileHeader.css";

function ProfileHeader() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="profile-header">

      <img
        src={`https://ui-avatars.com/api/?name=${
          user.fullName || "User"
        }&background=6d5dfc&color=fff&size=200`}
        alt="Profile"
      />

      <div className="profile-info">

        <h1>{user.fullName || "User"}</h1>

        <p>📧 {user.email || "Email"}</p>

        <p>🎓 B.Tech - Information Technology</p>

        <p>🏫 Vignan Institute of Technology</p>

        <span className="readiness">
          Placement Readiness : 82%
        </span>

      </div>

    </div>
  );
}

export default ProfileHeader;