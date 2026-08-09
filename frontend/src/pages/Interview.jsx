import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import InterviewStart from "../components/Interview/InterviewStart";
import InterviewQuestion from "../components/Interview/InterviewQuestion";
import InterviewResult from "../components/Interview/InterviewResult";

import "./Interview.css";

function Interview() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [role, setRole] = useState("");

  const startInterview = (selectedRole) => {
    setRole(selectedRole);
    setStarted(true);
  };

  const finishInterview = () => {
    setFinished(true);
  };

  return (
    <DashboardLayout>
      <div className="interview-page">
        {!started && (
          <InterviewStart onStart={startInterview} />
        )}

        {started && !finished && (
          <InterviewQuestion
            role={role}
            onFinish={finishInterview}
          />
        )}

        {finished && <InterviewResult />}
      </div>
    </DashboardLayout>
  );
}

export default Interview;