import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import CategoryCard from "../components/Aptitude/CategoryCard";
import QuestionCard from "../components/Aptitude/QuestionCard";
import ResultCard from "../components/Aptitude/ResultCard";

import "./Aptitude.css";

function Aptitude() {
  const [category, setCategory] = useState("");
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFinish = (finalScore, totalQuestions) => {
    setScore(finalScore);
    setTotal(totalQuestions);
    setFinished(true);
  };

  const restart = () => {
    setCategory("");
    setFinished(false);
    setScore(0);
    setTotal(0);
  };

  return (
    <DashboardLayout>
      <div className="aptitude-page">

        {!category && (
          <CategoryCard onSelect={setCategory} />
        )}

        {category && !finished && (
          <QuestionCard
            category={category}
            onFinish={handleFinish}
          />
        )}

        {finished && (
          <ResultCard
            score={score}
            total={total}
            onRestart={restart}
          />
        )}

      </div>
    </DashboardLayout>
  );
}

export default Aptitude;