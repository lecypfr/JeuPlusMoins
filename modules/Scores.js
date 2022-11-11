import { Score } from "./Score.js";

export function creationScore(tentatives, difficulty) {
  let formatageDifficulty = 1;

  while (difficulty>2) {
    difficulty = difficulty/2;
    formatageDifficulty *= 2;
  }

  formatageDifficulty+=5;

  let score = Math.floor((formatageDifficulty/tentatives)*50);

  return score;

}

function saveScoresInLocalStorage(scores) {
  let scores_JSON = JSON.stringify(scores);
  localStorage.setItem('scores', scores_JSON);
}

function getScoresFromLocalStorage() {
  let scores_JSON = localStorage.getItem('scores');
  if (scores_JSON == null || scores_JSON == "undefined") {
    return [];
  } else {
    return JSON.parse(scores_JSON);
  }
}

export function saveScore( username, tentatives, difficulty){
  let scores = getScoresFromLocalStorage();
  let score = creationScore(tentatives, difficulty);


  const index = scores.findIndex(score => {
    return score.username.toLowerCase() === username.toLowerCase();
  });
  
  if (index>=0) {

    if (scores[index].score <= score) {

      scores[index].score = score;
      var isNewPosition = true;

    } else {

      var isNewPosition = false;

    }

  } else {
    scores.push(new Score(username, score));
  }

  saveScoresInLocalStorage(scores);
}

export function resetScores(){
  localStorage.removeItem('scores');
}

export function displayScores(){
  let scores = sortScores(getScoresFromLocalStorage());
  return scores;
}

function sortScores(scores){
  scores.sort(function(a, b) {
    return b.score - a.score;
  });
  return scores;
}