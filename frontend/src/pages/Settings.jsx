import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "./Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleSave = () => {
    localStorage.setItem(
      "nextHireSettings",
      JSON.stringify({
        notifications,
        emailUpdates,
        darkMode,
      })
    );

    alert("Settings saved successfully!");
  };

  return (
    <DashboardLayout>
      <div className="settings-page">

        <div className="settings-header">
          <div>
            <span className="settings-tag">⚙️ NextHire AI</span>

            <h1>Settings</h1>

            <p>
              Customize your NextHire AI experience and manage your preferences.
            </p>
          </div>
        </div>

        <div className="settings-grid">

          {/* Account */}

          <div className="settings-card">
            <div className="settings-icon">👤</div>

            <div className="settings-content">
              <h2>Account</h2>
              <p>Manage your account information.</p>

              <div className="setting-row">
                <div>
                  <strong>Profile</strong>
                  <span>Update your personal information</span>
                </div>

                <button className="outline-btn">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}

          <div className="settings-card">
            <div className="settings-icon">🔔</div>

            <div className="settings-content">
              <h2>Notifications</h2>
              <p>Control how NextHire AI keeps you updated.</p>

              <div className="setting-row">
                <div>
                  <strong>Push Notifications</strong>
                  <span>Receive placement preparation reminders</span>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={() =>
                      setNotifications(!notifications)
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>

              <div className="setting-row">
                <div>
                  <strong>Email Updates</strong>
                  <span>Receive important placement updates</span>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={emailUpdates}
                    onChange={() =>
                      setEmailUpdates(!emailUpdates)
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance */}

          <div className="settings-card">
            <div className="settings-icon">🎨</div>

            <div className="settings-content">
              <h2>Appearance</h2>

              <p>
                Personalize the look of your NextHire AI dashboard.
              </p>

              <div className="setting-row">
                <div>
                  <strong>Dark Mode</strong>
                  <span>Use the premium dark interface</span>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() =>
                      setDarkMode(!darkMode)
                    }
                  />

                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Security */}

          <div className="settings-card">
            <div className="settings-icon">🔐</div>

            <div className="settings-content">
              <h2>Security</h2>

              <p>
                Keep your account secure.
              </p>

              <div className="security-info">
                <span className="security-status">
                  ● Account Protected
                </span>

                <p>
                  Your account is protected using secure authentication.
                </p>
              </div>
            </div>
          </div>

          {/* Preferences */}

          <div className="settings-card">
            <div className="settings-icon">⚙️</div>

            <div className="settings-content">
              <h2>Preferences</h2>

              <p>
                Configure your placement preparation experience.
              </p>

              <div className="preference-list">
                <div>
                  <span>Resume Preparation</span>
                  <strong>Enabled</strong>
                </div>

                <div>
                  <span>AI Interview Practice</span>
                  <strong>Enabled</strong>
                </div>

                <div>
                  <span>Coding Practice</span>
                  <strong>Enabled</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="settings-save">
          <button
            className="save-settings-btn"
            onClick={handleSave}
          >
            💾 Save Changes
          </button>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;