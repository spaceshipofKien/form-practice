// HTML variables
const listOfAllDice = document.querySelectorAll('.die');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const roundElement = document.getElementById('current-round');
const rollsElement = document.getElementById('current-round-rolls');
const totalScoreElement = document.getElementById('total-score');
const scoreHistoryElement = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesContainer = document.querySelector('.rules-container');

// State variables
let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;
let totalScore = 0;

// Toggle rules display
rulesBtn.addEventListener('click', () => {
  isModalShowing = !isModalShowing;
  rulesContainer.style.display = isModalShowing ? 'block' : 'none';
});

// Function to roll dice
const rollDice = () => {
  diceValuesArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
  rolls++;
  updateDiceDisplay();
  updateRollsElement();
};

// Function to update dice display
const updateDiceDisplay = () => {
  listOfAllDice.forEach((die, index) => {
    die.textContent = diceValuesArr[index];
  });
};

// Function to update rolls element
const updateRollsElement = () => {
  rollsElement.textContent = `Rolls: ${rolls}`;
};

// Function to keep score
const keepScore = () => {
  score = diceValuesArr.reduce((acc, val) => acc + val, 0);
  totalScore += score;
  updateScoreDisplay();
  saveScoreHistory();
  resetRound();
};

// Function to update score display
const updateScoreDisplay = () => {
  totalScoreElement.textContent = `Total Score: ${totalScore}`;
};

// Function to save score history
const saveScoreHistory = () => {
  const scoreEntry = document.createElement('li');
  scoreEntry.textContent = `Round ${round}: ${score}`;
  scoreHistoryElement.appendChild(scoreEntry);
};

// Function to reset round
const resetRound = () => {
  diceValuesArr = [];
  rolls = 0;
  score = 0;
  round++;
  updateRollsElement();
  roundElement.textContent = `Round: ${round}`;
};

// Event listeners for buttons
rollDiceBtn.addEventListener('click', rollDice);
keepScoreBtn.addEventListener('click', keepScore);
