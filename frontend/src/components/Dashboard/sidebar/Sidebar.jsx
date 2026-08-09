import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaCode,
  FaBrain,
  FaMicrophone,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Resume Builder", icon: <FaFileAlt />, path: "/resume" },
    { name: "ATS Scanner", icon: <FaChartBar />, path: "/ats" },
    { name: "Coding Practice", icon: <FaCode />, path: "/coding" },
    { name: "Aptitude", icon: <FaBrain />, path: "/aptitude" },
    { name: "AI Interview", icon: <FaMicrophone />, path: "/interview" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>NextHire AI</h2>
      </div>

      <nav className="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="logout-btn">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;