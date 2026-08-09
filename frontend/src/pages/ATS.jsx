import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ATSUpload from "../components/ATS/ATSUpload";
import ATSResult from "../components/ATS/ATSResult";

import "./ATS.css";

function ATS() {
  const [resumeFile, setResumeFile] = useState(null);

  return (
    <DashboardLayout>
      <div className="ats-page">
        <ATSUpload setResumeFile={setResumeFile} />

        {resumeFile && <ATSResult />}
      </div>
    </DashboardLayout>
  );
}

export default ATS;