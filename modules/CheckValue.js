let checkMessage = document.querySelector('#check_msg')

export function checkValue (Game,inputValue){
    let res = ""

    if(inputValue === Game.mysteryValue){
        console.log("dedans BINGO")
        res = "Bingo ! En plein dans le mille"
        // écran de win
        // return saveScore(Game.playerName , Game.attemptCount , Game.difficultyRange)
    } else if(inputValue > Game.mysteryValue){
        console.log("dedans1")
        res = "Plus bas (<)"
            // return newGame.resultatTentative[newGame.nbTentatives] = "+"
    } else if(inputValue < Game.mysteryValue){
        console.log("dedans1")
        res = "Plus haut (>)"
        // return newGame.resultatTentative[newGame.nbTentatives] = "-"
    } else{
        // écran de loose
    }

    return res
}


