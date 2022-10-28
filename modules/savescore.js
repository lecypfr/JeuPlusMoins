import { Score } from "./Score.js";
import { scores } from "./main.js";

export function savescore( username, score){

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
  
}