import "./ProblemCard.css";

function ProblemCard() {
  return (
    <div className="problem-card">

      <span className="difficulty">
        Easy
      </span>

      <h2>Two Sum</h2>

      <p>
        Given an array of integers and a target value,
        return the indices of the two numbers such that
        they add up to the target.
      </p>

      <div className="example">

        <h4>Example</h4>

        <p>
          Input: nums = [2,7,11,15]
        </p>

        <p>
          Target = 9
        </p>

        <p>
          Output: [0,1]
        </p>

      </div>

    </div>
  );
}

export default ProblemCard;