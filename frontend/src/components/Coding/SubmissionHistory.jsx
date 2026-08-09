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
  {
    id: 4,
    status: "Time Limit Exceeded",
    language: "C++",
    time: "09:20 AM",
  },
];

function SubmissionHistory() {
  return (
    <div className="submission-history">

      <h2>📜 Submission History</h2>

      {submissions.map((item) => (
        <div
          className="submission-card"
          key={item.id}
        >

          <div>
            <h3>{item.status}</h3>

            <p>{item.language}</p>
          </div>

          <span>{item.time}</span>

        </div>
      ))}

    </div>
  );
}

export default SubmissionHistory;