function scoreAnswers (roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer) {
    roosterAnswer = roosterAnswer.toLowerCase();
    leatherAnswer = leatherAnswer.toLowerCase();
    phoenixAnswer = phoenixAnswer.toLowerCase();
    rockyAnswer = rockyAnswer.toLowerCase();
    trickAnswer = trickAnswer.toLowerCase();

    let score = 0;

    if(roosterAnswer === 'zach') {
        score += 1;
    }
    if(leatherAnswer === '2') {
        score += 1;
    }
    if(phoenixAnswer === 'carlos') {
        score += 1;
    }
    if(rockyAnswer === 'caleb') {
        score += 1;
    }
    if(trickAnswer === 'nobody') {
        score += 1;
    }
    return score;
};