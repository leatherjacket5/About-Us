const test = QUnit.test;

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

test('all right answers is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const roosterAnswer = 'Zach';
    const leatherAnswer = '2';
    const phoenixAnswer = 'Carlos';
    const rockyAnswer = 'Caleb';
    const trickAnswer = 'NOBODY';
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswers(roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer)

    //Assert
    assert.equal(score, expected);
});

test('all wrong answers is 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const roosterAnswer = 'jeff';
    const leatherAnswer = '100';
    const phoenixAnswer = 'Carlosia';
    const rockyAnswer = 'butter';
    const trickAnswer = 'boo' || 'boo' || 'boo';
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = scoreAnswers(roosterAnswer, leatherAnswer, phoenixAnswer, rockyAnswer, trickAnswer)

    //Assert
    assert.equal(score, expected);
});