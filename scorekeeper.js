var player1Button = document.querySelector("#p1");
var player2Button = document.querySelector("#p2");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var maxScoreInput = document.querySelector("input");
var maxScoreDisplay = document.querySelector("#maxScoreDisplay");
player1Button.addEventListener("click", function() {
    p1Score = updateScores(p1Score);
    updateDisplay();
});
// player2Button.addEventListener("click", updateScores(p2Score));
player2Button.addEventListener("click", function() {
    p2Score = updateScores(p2Score);
    updateDisplay();
});
function updateDisplay(){
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
};
updateDisplay();
function updateScores(scores) {
    if (!gameOver) {
        scores ++;
        if (scores === maxScore) {
            gameOver = true;
        };
    };
    return scores
};

reset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    updateDisplay();
    gameOver = false;
});

maxScoreInput.addEventListener("input", function (){
    maxScore = Number(maxScoreInput.value);
    maxScoreDisplay.textContent = maxScore;
})
