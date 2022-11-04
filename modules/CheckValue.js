function checkValue (newGame,inputValue){

    var tentativeTotal = 7
     // $resultat = 0 valeur est égale / resultat = 1 inputValue est plus petit que mysteryValye / resultat =  2  inputValue est plus grand que mysteryValye 
    for ( ; tentativeTotal > newGame.nbTentatives; newGame.nbTentatives++) {

        if(inputValue === newGame.mysteryValue){
            newGame.resultatTentative[newGame.nbTentatives] = "="
            return console.log("test")

        }else{
            if(inputValue > newGame.mysteryValue){
                newGame.resultatTentative[newGame.nbTentatives] = "+"

            }
            if(inputValue < newGame.mysteryValue){
                newGame.resultatTentative[newGame.nbTentatives] = "-"
            }
        }
    }
    
}


