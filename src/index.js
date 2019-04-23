import scoreAnswers from './score-answer.js';

const submitButton = document.getElementById('submit-button');
const roosterInput = document.getElementById('rooster-ask');
const leatherInput = document.getElementById('leather-ask');
const phoenixInput = document.getElementById('phoenix-ask');
const rockyInput = document.getElementById('rocky-ask');
const trickInput = document.getElementById('trick-ask');
const  quizResult = document.getElementById('quiz-result');


submitButton.addEventListener('click', () => {
    const roosterAnswer = roosterInput.value;
    const leatherAnswer = leatherInput.value;
    const phoenixAnswer = phoenixInput.value;
    const rockyAnswer = rockyInput.value;
    const trickAnswer = trickInput.value;

    const score = scoreAnswers(roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer);
    
    const message = 'You got ' + score + '/5 correct';

    quizResult.textContent = message;

});

