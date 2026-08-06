import DashboardLayout from "../layouts/DashboardLayout";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ResumeProgress from "../components/Profile/ResumeProgress";
import AchievementCard from "../components/Profile/AchievementCard";
import ActivityCard from "../components/Profile/ActivityCard";

import "./Profile.css";

function Profile() {
  return (
    <DashboardLayout>
      <div className="profile-page">

        <ProfileHeader />

        <ResumeProgress />

        <AchievementCard />

        <ActivityCard />

      </div>
    </DashboardLayout>
  );
}

export default Profile;