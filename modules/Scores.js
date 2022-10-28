import { Score } from "./Score.js";

function creationScore(tentatives, difficulty) {
  let formatageDifficulty = 0;

  while (difficulty>2) {
    difficulty = difficulty/2;
    formatageDifficulty++;
  }

  formatageDifficulty+=5;

  let score = (formatageDifficulty-tentatives)*50;

  return score;

}

function getPositionOfScore(score, scores){
  let position = 1;
  scores.forEach(scoreTest => {

    if (scoreTest.score >= score) {
      position++;
    }

  });

  return position;
}

function saveScoresInLocalStorage(scores) {
  let scores_JSON = JSON.stringify(scores);
  localStorage.setItem('scores', scores_JSON);
}

function getScoresFromLocalStorage() {
  let scores_JSON = localStorage.getItem('scores');
  if (scores_JSON=="undefined") {
    return [];
  } else {
    return JSON.parse(scores_JSON);
  }
}

export function saveScore( username, tentatives, difficulty){

  let scores = getScoresFromLocalStorage();

  let score = creationScore(tentatives, difficulty);

  let position = getPositionOfScore(score, scores);


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

  let reponse = [];
  reponse['position'] = position;
  reponse['isNewPosition'] = isNewPosition;

  return reponse;

}

export function resetScores(){
  localStorage.removeItem('scores');
}

export function displayScores(){
  let scores = getScoresFromLocalStorage();
  return scores;
}

export function getScoreByName(playerName){
  let scores = getScoresFromLocalStorage();
  const score = scores.find(score => {
    return score.username.toLowerCase() === playerName.toLowerCase();
  });

  return score;
}