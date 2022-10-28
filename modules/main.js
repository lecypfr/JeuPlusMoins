import { saveScore, resetScores, displayScores, getScoreByName } from "./Scores.js";


console.log(saveScore('antoine', 8, 100));
console.log(displayScores());
console.log(saveScore('jeremy', 9, 200));
console.log(saveScore('cyprien', 2, 400));
console.log(saveScore('ugo', 6, 800));
console.log(saveScore('JEREMY', 2, 1600));
console.log(saveScore('marc', 9, 3200));

console.log(displayScores());

console.log(getScoreByName('jeremy'));
