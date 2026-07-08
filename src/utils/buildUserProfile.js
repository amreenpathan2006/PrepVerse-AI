export default function buildUserProfile(answers) {
  return {
    goal: answers.goal,
    experience: answers.experience,
    dailyTime: answers.time,

    // AI-ready computed fields
    level:
      answers.experience === "Beginner"
        ? 1
        : answers.experience === "Intermediate"
        ? 2
        : 3,

    focusIntensity:
      answers.time === "30 min"
        ? "low"
        : answers.time === "1 hour"
        ? "medium"
        : "high",

    recommendedMode:
      answers.goal === "UPSC"
        ? "theory-heavy"
        : answers.goal === "Software Engineering"
        ? "practice-heavy"
        : "balanced"
  };
}