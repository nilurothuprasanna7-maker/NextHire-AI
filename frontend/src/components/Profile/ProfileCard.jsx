import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="profile"
      />

      <h2>Prasanna Laxmi</h2>

      <p>
        B.Tech Information Technology
      </p>

      <span>
        Vignan Institute of Technology
      </span>

      <button>
        Edit Profile
      </button>

    </div>
  );
}

export default ProfileCard;