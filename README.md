# JeuPlusMoins

## CLASSES

- Score{ username, score }



## VARIABLES GLOABLES

- scores : array<Score>



## FONCTIONS

# Core
- newGame(string playerName, int difficultyValue) -> Initialise la partie en créant un générant un nombre aléatoire $mysteryValue
- checkValue(int inputValue) -> Compare $mysteryValue avec inputValue

# Interface
- configGameRender() -> Demande le nom d'utilisateur et le nombre maximum (difficulté)
- startGameRender() -> Initialise l'interface de jeu et appelle newGame()
- checkValueRender() -> Indique le résultat de la comparaison après avoir appelé checkValue()
- endGameRender() -> Initialise l'écran final de la partie
- displayScoreRender() -> Affiche le tableau des scores 
- searchScore()

# Scoreboard
- savecode(username: string, score: int): [ position: int, isNewPosition: boolean ]
  Enregistre le score + nom du joueur, retourne la meilleure position actuelle dans le scoreboard (postion mise à jour a la suite de cette partie ou d'un précèdente et précisé la quand ce record a été fait : tableau[int position, bool newPosition])
- resetScore() -> Remet a zéro le LocalStorage
- displayScore() -> Retourne un tableau contenant les scores
- getScoreByName(string playerName) -> A partir du nom d'un joueur (enregistré dans le tableau des parties/scores) retrouve son meilleur score