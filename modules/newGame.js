
class NewGame {
    constructor(newPlayerName, newDifficultyValue){
        this.playerName = newPlayerName
        this.difficultyValue = newDifficultyValue
        this.mysteryValue = Math.floor(Math.random() *  this.difficultyValue);
        this.nbTentatives = 0
        this.resultatTentative = []
    }
}


export default {   
    NewGame
}



