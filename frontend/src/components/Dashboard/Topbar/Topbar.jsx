import {
  FaSearch,
  FaBell,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Topbar.css";

function Topbar() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="topbar">

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="topbar-right">

        <button className="icon-btn">
          <FaBell />
        </button>

        <button className="icon-btn">
          <FaMoon />
        </button>

        <div className="profile">

          <img
            src={`https://ui-avatars.com/api/?name=${
              user.fullName || "User"
            }&background=6d5dfc&color=fff`}
            alt="Profile"
          />

          <div>
            <h4>{user.fullName || "User"}</h4>
            <span>{user.email || "Student"}</span>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
          title="Logout"
        >
          <FaSignOutAlt />
        </button>

      </div>

    </header>
  );
}

export default Topbar;