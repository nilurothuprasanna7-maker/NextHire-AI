import DashboardLayout from "../layouts/DashboardLayout";

import ProblemCard from "../components/Coding/ProblemCard";
import CodingEditor from "../components/Coding/CodingEditor";
import SubmissionHistory from "../components/Coding/SubmissionHistory";

import "./Coding.css";

function Coding() {
  return (
    <DashboardLayout>
      <div className="coding-page">

        <ProblemCard />

        <CodingEditor />

        <SubmissionHistory />

      </div>
    </DashboardLayout>
  );
}

export default Coding;