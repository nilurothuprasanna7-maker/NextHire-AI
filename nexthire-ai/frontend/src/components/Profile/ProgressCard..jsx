import "./ProgressCard.css";

const progress = [
  { title: "Resume Score", value: "90%" },
  { title: "ATS Score", value: "84%" },
  { title: "Coding Progress", value: "68%" },
  { title: "Aptitude Progress", value: "75%" },
  { title: "Interview Progress", value: "80%" },
  { title: "Placement Readiness", value: "82%" },
];

function ProgressCard() {
  return (
    <div className="progress-grid">
      {progress.map((item, index) => (
        <div className="progress-card" key={index}>
          <h3>{item.title}</h3>
          <h1>{item.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProgressCard;