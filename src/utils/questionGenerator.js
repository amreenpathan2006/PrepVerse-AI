export const generateQuestions = (questions, profile = {}) => {
  return questions.map((question) => ({
    ...question,

    question:
      question.question.replace(
        "{name}",
        profile.name || "Candidate"
      ),

    category:
      question.category || "General",

    difficulty:
      question.difficulty || "Easy",
  }));
};