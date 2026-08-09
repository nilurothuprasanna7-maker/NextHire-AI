import "./ProblemCard.css";

function ProblemCard() {
  return (
    <div className="problem-card">

      <div className="problem-header">
        <h2>Two Sum</h2>

        <span className="difficulty easy">
          Easy
        </span>
      </div>

      <p className="problem-description">
        Given an array of integers <strong>nums</strong> and an integer
        <strong> target</strong>, return the indices of the two numbers
        such that they add up to the target.
      </p>

      <div className="example">

        <h3>Example</h3>

        <p><strong>Input:</strong> nums = [2,7,11,15]</p>

        <p><strong>Target:</strong> 9</p>

        <p><strong>Output:</strong> [0,1]</p>

      </div>

      <div className="constraints">

        <h3>Constraints</h3>

        <ul>
          <li>2 ≤ nums.length ≤ 10⁴</li>
          <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
          <li>-10⁹ ≤ target ≤ 10⁹</li>
          <li>Exactly one valid answer exists.</li>
        </ul>

      </div>

      <div className="tags">

        <span>Array</span>
        <span>Hash Map</span>
        <span>Easy</span>

      </div>

    </div>
  );
}

export default ProblemCard;