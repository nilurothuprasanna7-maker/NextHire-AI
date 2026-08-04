import "./MentorCard.css";
import { FaRobot } from "react-icons/fa";

function MentorCard() {
  return (
    <div className="mentor-card">

      <div className="mentor-header">
        <FaRobot className="mentor-icon" />

        <h2>AI Mentor</h2>
      </div>

      <p>
        Welcome back! Today your focus should be:
      </p>

      <ul>
        <li>✅ Complete 2 Coding Questions</li>
        <li>✅ Improve Resume Skills Section</li>
        <li>✅ Practice 10 Aptitude Questions</li>
        <li>✅ Attend 1 Mock Interview</li>
      </ul>

      <button>Start Learning</button>

    </div>
  );
}

export default MentorCard;