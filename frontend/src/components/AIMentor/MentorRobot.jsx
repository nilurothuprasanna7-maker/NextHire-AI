import { useState } from "react";
import "./MentorRobot.css";

function MentorRobot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Robot Button */}
      <div
        className="mentor-floating"
        onClick={() => setOpen(!open)}
      >
        <img
          src="/robot.png"
          alt="AI Mentor"
          className="mentor-image"
        />

        <span className="mentor-badge">1</span>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="mentor-chat">

          <div className="mentor-header">
            <h3>🤖 NextHire AI Mentor</h3>

            <button
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="mentor-body">

            <div className="mentor-message">

              👋 Hello!

              <br /><br />

              I'm your AI Placement Mentor.

              <br /><br />

              I can help you with:

              <ul>
                <li>📄 Resume Review</li>
                <li>🎤 Interview Practice</li>
                <li>💻 Coding Help</li>
                <li>🧠 Aptitude</li>
                <li>💼 Job Guidance</li>
              </ul>

            </div>

          </div>

          <div className="mentor-footer">

            <input
              type="text"
              placeholder="Ask your mentor..."
            />

            <button>
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default MentorRobot;