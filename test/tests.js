import scoreAnswers from '../src/score-answer';
const test = QUnit.test;

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