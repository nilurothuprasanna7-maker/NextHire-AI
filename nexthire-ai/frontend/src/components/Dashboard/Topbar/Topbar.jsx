import { FaSearch, FaBell, FaMoon } from "react-icons/fa";
import "./Topbar.css";

function Topbar() {
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
            src="https://ui-avatars.com/api/?name=Prasanna&background=6d5dfc&color=fff"
            alt="Profile"
          />

          <div>
            <h4>Prasanna</h4>
            <span>Student</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;