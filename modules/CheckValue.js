function checkValue (newGame,inputValue){

    newGame.nbTentatives = newGame.nbTentatives + 1;
    if(inputValue === newGame.mysteryValue){
        newGame.resultatTentative[newGame.nbTentatives] = "="
        return saveScore(newGame.playerName , newGame.nbTentatives , newGame.difficultyValue)

    }else{
        if(inputValue > newGame.mysteryValue){
            return newGame.resultatTentative[newGame.nbTentatives] = "+"

        }
        if(inputValue < newGame.mysteryValue){
            return newGame.resultatTentative[newGame.nbTentatives] = "-"
        }
    }
    
    
}


