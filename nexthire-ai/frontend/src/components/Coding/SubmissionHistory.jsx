import "./SubmissionHistory.css";

const submissions = [
  {
    id: 1,
    status: "Accepted",
    language: "Java",
    time: "10:15 AM",
  },
  {
    id: 2,
    status: "Wrong Answer",
    language: "Python",
    time: "10:02 AM",
  },
  {
    id: 3,
    status: "Accepted",
    language: "JavaScript",
    time: "09:40 AM",
  },
];

function SubmissionHistory() {
  return (
    <div className="submission-history">

      <h2>Submission History</h2>

      {submissions.map((item) => (
        <div
          className="submission-card"
          key={item.id}
        >
          <h3>{item.status}</h3>

          <p>{item.language}</p>

          <span>{item.time}</span>
        </div>
      ))}

    </div>
  );
}

export default SubmissionHistory;