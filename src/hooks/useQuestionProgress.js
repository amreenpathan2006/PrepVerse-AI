import { useState } from "react";

function useQuestionProgress(totalQuestions) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => {
      if (prev < totalQuestions - 1) {
        return prev + 1;
      }

      return prev;
    });
  };

  const progress =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return {
    currentQuestionIndex,
    nextQuestion,
    progress,
  };
}

export default useQuestionProgress;