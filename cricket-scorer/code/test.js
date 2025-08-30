const assert = require('assert');
const scorer = require('./script.js');

function runTest(testFunction) {
    scorer.reset();
    testFunction();
}

function testAddRuns() {
    scorer.addRuns(4);
    let score = scorer.getScore();
    assert.strictEqual(score.runs, 4, 'testAddRuns: Runs should be 4');
    assert.strictEqual(score.balls, 1, 'testAddRuns: Balls should be 1');
    console.log('testAddRuns passed');
}

function testAddWicket() {
    scorer.addWicket();
    let score = scorer.getScore();
    assert.strictEqual(score.wickets, 1, 'testAddWicket: Wickets should be 1');
    assert.strictEqual(score.balls, 1, 'testAddWicket: Balls should be 1');
    console.log('testAddWicket passed');
}

function testFullOver() {
    for (let i = 0; i < 6; i++) {
        scorer.addRuns(1);
    }
    let score = scorer.getScore();
    assert.strictEqual(score.overs, 1, 'testFullOver: Overs should be 1');
    assert.strictEqual(score.balls, 0, 'testFullOver: Balls should be 0');
    console.log('testFullOver passed');
}

function testExtras() {
    scorer.addExtra('wide');
    let score = scorer.getScore();
    assert.strictEqual(score.runs, 1, 'testExtras (wide): Runs should be 1');
    assert.strictEqual(score.balls, 0, 'testExtras (wide): Balls should be 0');

    scorer.addExtra('no-ball');
    score = scorer.getScore();
    assert.strictEqual(score.runs, 2, 'testExtras (no-ball): Runs should be 2');
    assert.strictEqual(score.balls, 1, 'testExtras (no-ball): Balls should be 1');
    console.log('testExtras passed');
}

function testUndo() {
    scorer.addRuns(4);
    scorer.addWicket();
    scorer.undo();
    let score = scorer.getScore();
    assert.strictEqual(score.wickets, 0, 'testUndo: Wickets should be 0');
    assert.strictEqual(score.balls, 1, 'testUndo: Balls should be 1');
    scorer.undo();
    score = scorer.getScore();
    assert.strictEqual(score.runs, 0, 'testUndo: Runs should be 0');
    assert.strictEqual(score.balls, 0, 'testUndo: Balls should be 0');
    console.log('testUndo passed');
}

function testReset() {
    scorer.addRuns(6);
    scorer.addWicket();
    scorer.reset();
    let score = scorer.getScore();
    assert.strictEqual(score.runs, 0, 'testReset: Runs should be 0');
    assert.strictEqual(score.wickets, 0, 'testReset: Wickets should be 0');
    assert.strictEqual(score.overs, 0, 'testReset: Overs should be 0');
    assert.strictEqual(score.balls, 0, 'testReset: Balls should be 0');
    console.log('testReset passed');
}

runTest(testAddRuns);
runTest(testAddWicket);
runTest(testFullOver);
runTest(testExtras);
runTest(testUndo);
runTest(testReset);

console.log('All tests passed!');
