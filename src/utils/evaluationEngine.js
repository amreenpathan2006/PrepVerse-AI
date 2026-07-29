export function evaluateInterview(interviewData) {
    let score = 0;

    const feedback = [];

    interviewData.forEach((item) => {
        const answerLength = item.answer.trim().length;

        let answerScore = 0;
        let comment = "";

        if (answerLength > 200) {
            answerScore = 10;
            comment = "Excellent detailed answer.";
        }
        else if (answerLength > 100) {
            answerScore = 8;
            comment = "Good explanation.";
        }
        else if (answerLength > 40) {
            answerScore = 6;
            comment = "Average answer. Could include more details.";
        }
        else if (answerLength > 10) {
            answerScore = 4;
            comment = "Very short answer.";
        }
        else {
            answerScore = 1;
            comment = "No meaningful response.";
        }

        score += answerScore;

        feedback.push({
            question: item.question,
            answer: item.answer,
            score: answerScore,
            comment
        });
    });

    const percentage = Math.round(
        (score / (interviewData.length * 10)) * 100
    );

    return {
        totalScore: score,
        percentage,
        feedback
    };
}