
class NewGame {
    constructor(newPlayerName, newDifficultyValue){
        this.playerName = newPlayerName
        this.difficultyValue = newDifficultyValue
        this.mysteryValue = Math.floor(Math.random() *  this.difficultyValue);
    }
}



export default {   
    NewGame
}



