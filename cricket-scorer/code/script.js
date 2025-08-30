let runs = 0;
let wickets = 0;
let overs = 0;
let balls = 0;
let history = [];

let runsEl, wicketsEl, oversEl, ballsEl;

if (typeof window !== 'undefined') {
    runsEl = document.getElementById('runs');
    wicketsEl = document.getElementById('wickets');
    oversEl = document.getElementById('overs');
    ballsEl = document.getElementById('balls');
} else {
    // Mock DOM elements for testing in Node.js
    runsEl = { innerText: '' };
    wicketsEl = { innerText: '' };
    oversEl = { innerText: '' };
    ballsEl = { innerText: '' };
}


function addRuns(run) {
    if (wickets < 10) {
        runs += run;
        addBall();
        updateScore();
        addToHistory({ runs: run, type: 'run' });
    }
}

function addExtra(type) {
    if (wickets < 10) {
        runs++;
        if (type === 'no-ball') {
            addBall();
        }
        updateScore();
        addToHistory({ runs: 1, type: type });
    }
}

function addWicket() {
    if (wickets < 10) {
        wickets++;
        addBall();
        updateScore();
        addToHistory({ type: 'wicket' });
    }
}

function addBall() {
    if (balls < 5) {
        balls++;
    } else {
        balls = 0;
        overs++;
    }
}

function updateScore() {
    runsEl.innerText = runs;
    wicketsEl.innerText = wickets;
    oversEl.innerText = overs;
    ballsEl.innerText = balls;
}

function undo() {
    if (history.length > 0) {
        const lastAction = history.pop();
        if (lastAction.type === 'run') {
            runs -= lastAction.runs;
            removeBall();
        } else if (lastAction.type === 'wide' || lastAction.type === 'no-ball') {
            runs -= 1;
            if (lastAction.type === 'no-ball') {
                removeBall();
            }
        } else if (lastAction.type === 'wicket') {
            wickets--;
            removeBall();
        }
        updateScore();
    }
}

function removeBall() {
    if (balls > 0) {
        balls--;
    } else {
        if (overs > 0) {
            overs--;
            balls = 5;
        }
    }
}

function reset() {
    runs = 0;
    wickets = 0;
    overs = 0;
    balls = 0;
    history = [];
    updateScore();
}

function addToHistory(action) {
    history.push(action);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addRuns,
        addExtra,
        addWicket,
        undo,
        reset,
        getScore: () => ({ runs, wickets, overs, balls })
    };
}
