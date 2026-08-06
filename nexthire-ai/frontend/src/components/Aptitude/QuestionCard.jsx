import { useState } from "react";
import "./QuestionCard.css";

const questions = [
  {
    question: "If 5x = 20, what is the value of x?",
    options: ["2", "4", "5", "10"],
    answer: "4",
  },
  {
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: "32",
  },
  {
    question: "Which is the odd one out?",
    options: ["Circle", "Square", "Triangle", "Apple"],
    answer: "Apple",
  },
];

function QuestionCard({ category, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const question = questions[current];

  const selectAnswer = (option) => {
    let updatedScore = score;

    if (option === question.answer) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      onFinish(updatedScore, questions.length);
    }
  };

  return (
    <div className="question-card">

      <h2>{category}</h2>

      <div className="question-number">
        Question {current + 1} / {questions.length}
      </div>

      <h3>{question.question}</h3>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => selectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}

export default QuestionCard;