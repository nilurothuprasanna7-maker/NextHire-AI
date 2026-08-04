import "./ATSResult.css";

function ATSResult() {
  return (
    <div className="ats-result">

      <h2>ATS Analysis Report</h2>

      <div className="score-circle">
        <h1>84</h1>
        <span>/100</span>
      </div>

      <div className="result-section">
        <h3>✅ Strengths</h3>

        <ul>
          <li>React Skills Found</li>
          <li>Java Projects Found</li>
          <li>Professional Resume Format</li>
          <li>Education Section Present</li>
        </ul>
      </div>

      <div className="result-section">
        <h3>❌ Missing Keywords</h3>

        <ul>
          <li>Docker</li>
          <li>AWS</li>
          <li>Kubernetes</li>
          <li>CI/CD</li>
        </ul>
      </div>

      <div className="result-section">
        <h3>🤖 AI Suggestions</h3>

        <ul>
          <li>Add measurable achievements.</li>
          <li>Improve project descriptions.</li>
          <li>Add certifications.</li>
          <li>Include internship experience.</li>
        </ul>
      </div>

    </div>
  );
}

export default ATSResult;