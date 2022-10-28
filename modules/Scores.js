import { Score } from "./Score.js";

export var scores= [];

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

export function saveScore( username, tentatives, difficulty){

 let score = creationScore(tentatives, difficulty);

  let position = 1;

  scores.forEach(scoreTest => {

    if (scoreTest.score >= score) {
      position++;
    }

  });

  const index = scores.findIndex(score => {
    return score.username === username;
  });

  let isNewPosition = false;
  
  if (index>=0) {
    if (scores[index].score <= score) {
      scores[index].score = score;
      isNewPosition = true;
    }
  } else {
    scores.push(new Score(username, score));
  }


  let reponse = [];
  reponse['position'] = position;
  reponse['isNewPosition'] = isNewPosition;

  return reponse;

}