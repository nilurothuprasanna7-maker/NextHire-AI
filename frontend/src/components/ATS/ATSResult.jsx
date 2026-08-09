import "./ATSResult.css";

function ATSResult() {
  return (
    <div className="ats-result">

      <h1>🤖 AI ATS Analysis Report</h1>

      <div className="score-section">

        <div className="score-circle">
          <h2>84</h2>
          <span>/100</span>
        </div>

        <div className="score-details">
          <h3>Placement Readiness</h3>
          <p>
            Your resume has a good structure and covers the essential
            sections. Improving keywords and achievements can significantly
            increase your ATS score.
          </p>
        </div>

      </div>

      <div className="analysis-grid">

        <div className="analysis-card">
          <h2>✅ Strengths</h2>

          <ul>
            <li>Professional resume layout</li>
            <li>React & Java skills identified</li>
            <li>Education section complete</li>
            <li>Projects are included</li>
          </ul>
        </div>

        <div className="analysis-card">
          <h2>⚠ Missing Keywords</h2>

          <ul>
            <li>Docker</li>
            <li>AWS</li>
            <li>Kubernetes</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="analysis-card">
          <h2>💡 AI Suggestions</h2>

          <ul>
            <li>Add internship experience.</li>
            <li>Include measurable achievements.</li>
            <li>Add certifications.</li>
            <li>Improve project descriptions with impact.</li>
          </ul>
        </div>

        <div className="analysis-card">
          <h2>⭐ Resume Summary</h2>

          <p>
            You have a solid beginner resume suitable for campus placements.
            Adding modern technologies, quantified achievements, and relevant
            certifications can improve your chances in ATS-based screening.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ATSResult;