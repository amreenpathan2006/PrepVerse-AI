export const evaluateAnswer = (question, answer = "") => {
    const text = answer.trim();

    if (!text) {
        return {
            score: 0,
            confidence: "Low",
            strengths: [],
            weaknesses: [
                "No answer was provided."
            ],
            suggestions: [
                "Try answering the question with at least 2-3 sentences."
            ]
        };
    }

    let score = 50;

    const strengths = [];
    const weaknesses = [];
    const suggestions = [];

    // Length check
    if (text.length > 120) {
        score += 20;
        strengths.push("Provided a detailed response.");
    } else {
        weaknesses.push("Answer is too short.");
        suggestions.push("Add more explanation and examples.");
    }

    // Example detection
    if (
        text.toLowerCase().includes("example") ||
        text.toLowerCase().includes("project")
    ) {
        score += 15;
        strengths.push("Used an example to support the answer.");
    } else {
        weaknesses.push("No example was included.");
        suggestions.push("Support your answer with a real project or experience.");
    }

    // Confidence words
    if (
        text.toLowerCase().includes("i") &&
        text.toLowerCase().includes("learn")
    ) {
        score += 10;
        strengths.push("Shows willingness to learn.");
    }

    if (score > 100) score = 100;

    return {
        score,
        confidence:
            score >= 80
                ? "High"
                : score >= 60
                ? "Medium"
                : "Low",
        strengths,
        weaknesses,
        suggestions
    };
};