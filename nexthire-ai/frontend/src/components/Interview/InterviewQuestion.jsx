import { useState } from "react";
import "./InterviewQuestion.css";

const questions = [
  "Tell me about yourself.",
  "What are your strengths?",
  "Why should we hire you?",
  "Explain one of your projects.",
  "Where do you see yourself in 5 years?",
];

function InterviewQuestion({ role, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="interview-question">
      <h2>{role}</h2>

      <div className="timer">
        ⏱ 02:00
      </div>

      <h1>{questions[currentQuestion]}</h1>

      <textarea
        rows="8"
        placeholder="Type your answer here..."
      />

      <button onClick={nextQuestion}>
        {currentQuestion === questions.length - 1
          ? "Finish Interview"
          : "Next Question"}
      </button>
    </div>
  );
}

export default InterviewQuestion;