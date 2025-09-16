const secretNumber = 3;

let points = 0;
let guess;
let cancelled = false;

while (true) {
    let input = prompt("Guess my favorite number between 1 and 5:");

    if (input == null ) {
        cancelled = true;
        break;
    }

    guess = parseInt(input, 10);

    if (isNaN(guess) || guess < 1 || guess > 5) {
        alert("Please enter a number between 1 and 5.");
        continue;
    }

    break;
}

const resultEl = document.getElementById("game-result");

if (cancelled) {
    resultEl.innerHTML = "<p>Game cancelled. You earned 0 points.</p>";
} else if (guess === secretNumber) {
    points = 10;
    resultEl.innerHTML = `<p>Correct! The secret number was ${secretNumber}.</p>
    <p>You earned ${points} points.</p>
    `;
} else {
    resultEl.innerHTML = `
    <p>Wrong. The secret number was ${secretNumber}, not ${guess}.</p>
    <p>You earned ${points} points.</p>
    `;
}
