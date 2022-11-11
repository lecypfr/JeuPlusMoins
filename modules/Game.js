import { game, createWinPage, createLoosePage } from "./ui.js"
import { saveScore } from "./scores.js"

export class Game {
    constructor(playerName, difficultyRange){
        this.playerName = playerName
        this.difficultyRange = difficultyRange
        this.maxAttempt = 12
        this.attemptCount = 1
        this.attemptResults = []
    }
}


export function checkValue (numberUser , mysteryValue){
    let res = ""

    if (numberUser > mysteryValue){
        res = "Plus bas (<)"
    } else if (numberUser < mysteryValue){
        res = "Plus haut (>)"
    } else {
        saveScore(game.playerName, game.attemptCount, (game.difficultyRange.maxValue - game.difficultyRange.minValue))
        createWinPage()
    }

    return res
}

export function updateAttemptsRender(){
    if (game.attemptCount === game.maxAttempt){
        createLoosePage()
    } else {
        const attempts = document.querySelector('#attempts p')

        if (attempts){
            game.attemptCount++
            attempts.innerText = game.attemptCount
        }
    }
}

export default {   
    Game
}



