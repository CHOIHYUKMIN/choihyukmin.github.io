// Questions data with scores for mental age calculation
// Scores are language-independent
const questionScores = [
    [20, 35, 28, 45], // Q1
    [18, 25, 38, 50], // Q2
    [22, 35, 42, 48], // Q3
    [20, 28, 40, 50], // Q4
    [22, 30, 40, 55], // Q5
    [20, 25, 38, 48], // Q6
    [23, 30, 40, 52], // Q7
    [24, 26, 38, 45], // Q8
    [21, 28, 38, 50], // Q9
    [20, 28, 40, 48]  // Q10
];

// Get questions for current language from i18n
function getQuestions() {
    if (typeof i18n !== 'undefined') {
        return i18n.getQuestions();
    }
    // Fallback to Korean if i18n not loaded
    return translations_ko.questions;
}

// Get score for a specific question and option
function getQuestionScore(questionIndex, optionIndex) {
    if (questionIndex >= 0 && questionIndex < questionScores.length) {
        return questionScores[questionIndex][optionIndex] || 30;
    }
    return 30; // Default score
}

// Calculate mental age from total score
function calculateMentalAge(totalScore, questionCount) {
    // Average of all scores
    return Math.round(totalScore / questionCount);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getQuestions, getQuestionScore, calculateMentalAge };
}
