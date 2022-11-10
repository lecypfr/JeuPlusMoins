export class Game {
    
    constructor(playerName, difficultyRange){
        this.playerName = playerName
        this.difficultyRange = difficultyRange
        this.mysteryValue = Math.floor(Math.random() * (parseInt(difficultyRange.maxValue) - parseInt(difficultyRange.minValue ) + 1)) + parseInt(difficultyRange.minValue);
        this.maxAttempt = 7
        this.attemptCount = 1
        this.attemptResults = []
    }
}

export default {   
    Game
}



