import "./ProfileHeader.css";

function ProfileHeader() {
  return (
    <div className="profile-header">

      <img
        src="https://i.pravatar.cc/200?img=32"
        alt="Profile"
      />

      <div>

        <h1>Prasanna Laxmi</h1>

        <p>B.Tech - Information Technology</p>

        <p>Vignan Institute of Technology</p>

        <span>Placement Readiness: 82%</span>

      </div>

    </div>
  );
}

export default ProfileHeader;