import { Score } from "./Score.js";

export var scores= [];

export function saveScore( username, score){

  let position = 1;

  scores.forEach(scoreTest => {

    if (scoreTest.score <= score) {
      position++;
    }

  });

  const index = scores.findIndex(score => {
    return score.username === username;
  });

  let isNewPosition = false;
  
  if (index>=0) {
    if (scores[index].score > score) {
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