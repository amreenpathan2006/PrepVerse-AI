export const generateQuestions = (questions, profile = {}) => {
  return questions.map((question, index) => {
    const personalizedQuestion = question.question.replace(
      "{name}",
      profile.name || "Candidate"
    );

    let intro = "";

    switch (question.category) {
      case "Introduction":
        intro = "Let's begin with a quick introduction.";
        break;

      case "Technical":
        intro = "Great! Now I'd like to ask you a technical question.";
        break;

      case "Behavioral":
        intro = "Excellent. Here's a behavioral question.";
        break;

      case "Projects":
        intro = "Let's talk about your project experience.";
        break;

      default:
        intro =
          index === 0
            ? "Welcome to your interview."
            : "Let's continue.";
    }

    return {
      ...question,
      question: personalizedQuestion,
      aiPrompt: `${intro} ${personalizedQuestion}`,
      category: question.category || "General",
      difficulty: question.difficulty || "Easy",
    };
  });
};