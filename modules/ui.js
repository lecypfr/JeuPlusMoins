import { Game, checkValue, updateAttemptsRender } from "./Game.js"
import { creationScore, displayScores } from "./scores.js"

export let game

const container = document.querySelector('#container')
let mysteryValue

export function checkOption(){
    const playerName = document.querySelector('#name_input')
    const intervalBegin = document.querySelector('#input_min')
    const intervalEnd = document.querySelector('#input_max')
    const errorMessage = document.querySelector('#error_msg')

    if(playerName.value === ""){
        errorMessage.innerText = "Veuillez renseigner un pseudo"
        return false
    } else if(intervalBegin.value < 0 || intervalBegin.value === ""){
        errorMessage.innerText = "Veuillez rentrer une valeur minimale, supérieur ou égale à 0"
        return false
    } else if(intervalEnd.value > 7500 || intervalEnd.value === ""){
        errorMessage.innerText = "Veuillez rentrer une valeur maximale, inférieur ou égale à 7500"
        return false
    }
    return true
}



export function checkValueRender(){
    const valueInput = document.querySelector('#value_input')
    const checkMessage = document.querySelector('#check_msg')


    let numberUser = parseInt(valueInput.value);
    let minValue = parseInt(game.difficultyRange.minValue)
    let maxValue = parseInt(game.difficultyRange.maxValue)

    if(!numberUser){
        checkMessage.innerText = "Veuillez renseigner une valeur"
        checkMessage.style.color = '#dd0303'
    } else if (numberUser < minValue){
        checkMessage.innerText = "Veuillez renseigner une valeur supérieur ou égale à " + minValue
        checkMessage.style.color = '#dd0303'
    } else if (numberUser > maxValue){
        checkMessage.innerText = "Veuillez renseigner une valeur inférieur ou égale à " + maxValue
        checkMessage.style.color = '#dd0303'
    } else {
        checkMessage.innerText = checkValue(numberUser, mysteryValue)
        checkMessage.style.color = '#ccff33'
        updateAttemptsRender()
    }
}



export function createConfigGame(){
    container.innerHTML = `
    <section id="settings">
        <h1>Paramètres</h1>
        <div id="settings_box">
            <div>
                <label>Pseudo</label>
                <input type="text" id="name_input" required>
            </div>
            <div id="range">
                <label>Intervalle</label>
                <input type="number" class="range_input" id="input_min" value="0" placeholder="Min" controls="hidden" min="0" max="7000" required>
                <div class="separator">-</div>
                <input type="number" class="range_input" id="input_max" value="500" placeholder="Max" min="500" max="7500"required>
            </div>
        </div>
    </section>
    <a id="start_btn">Commencer</a>
    <p id="error_msg"></p>`

    const start_btn = document.querySelector('#start_btn')
    start_btn.addEventListener('click', () => {
        if (checkOption()) {
            createGamePage()
        }
    })

    const inputNameEl = document.querySelector('#name_input')
    inputNameEl.addEventListener('keyup', (e) => {
        if(e.key == "Enter"){
            if (checkOption()) {
                createGamePage()
            }
        }
    })
}



function createGamePage(){
    const playerName = document.querySelector('#name_input')
    const intervalBegin = document.querySelector('#input_min')
    const intervalEnd = document.querySelector('#input_max')
    
    game = new Game(playerName.value, {
        minValue: intervalBegin.value,
        maxValue: intervalEnd.value
    })

    mysteryValue = Math.floor(Math.random() * (parseInt(game.difficultyRange.maxValue) - parseInt(game.difficultyRange.minValue ) + 1)) + parseInt(game.difficultyRange.minValue);

    container.innerHTML = `
    <section id="game">
        <h1>QUEL NOMBRE PROPOSES-TU ?</h1>
        <div id="attempts">
            <p>${game.attemptCount}</p>
            <p>/</p>
            <p>${game.maxAttempt}</p>
        </div>
        <div id="game_infos">
            <p>${game.difficultyRange.minValue}</p>
            <p>></p>
            <input type="number" id="value_input" placeholder="42" required>
            <p>></p>
            <p>${game.difficultyRange.maxValue}</p>
        </div>
    </section>
    <a id="check_btn">Vérifier</a>
    <p id="check_msg"></p>`

    const valueInput = document.querySelector('#value_input')
    valueInput.addEventListener('keyup', (e) => {
        if(e.key == "Enter"){
            checkValueRender()
            valueInput.value = ''
        }
    })

    const checkBtn = document.querySelector('#check_btn')
    checkBtn.addEventListener('click', () => {
        checkValueRender()
        valueInput.value = ''
    })

    
}



export function createWinPage(){
    let score = creationScore(game.attemptCount, (game.difficultyRange.maxValue - game.difficultyRange.minValue))

    container.innerHTML = `
        <section id="win">
            <h1>EN PLEIN DANS LE MILLE !</h1>
            <p>Le nombre mystère était ${mysteryValue}</p>
            <div class="stats_box">
                <h2>${game.playerName}</h2>
                <div id="stats">
                    <div id="stat_attempts">
                        <h3 class="stat_h3">
                            <p>${game.attemptCount}</p>
                            <p>/</p>
                            <p>${game.maxAttempt}</p>
                        </h3>
                        <p>Tentatives</p>
                    </div>
                    <div id="stat_score">
                        <h3 class="stat_h3">
                            <p>${score}</p>
                            <p>pts</p>
                        </h3>
                        <p>Score</p>
                    </div>
                </div>
            </div>
        </section>
        <div id="bottom_btn">
            <a id="restart_btn">Rejouer</a>
            <a id="leave_btn">Quitter</a>
        </div>
        <section id="scores">
            <h1>SCORES</h1>
            <table>
            <thead id="tab_head">
                <tr>
                    <th>N°</th>
                    <th>Pseudo</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody id="list-scores">
                </tbody>
            </table>
        </section>`

    createScoreboard()
    showSpecificRankScoreboard()

    const restartBtn = container.querySelector('#restart_btn')
    restartBtn.addEventListener('click', () => {
        createConfigGame()
    })
    
    const leaveBtn = container.querySelector('#leave_btn')
    leaveBtn.addEventListener('click', () => {
        createHome()
    })
}



export function createLoosePage(){
    container.innerHTML = `
        <section id="defeat">
            <h1>ON DIRAIT BIEN QUE TU N'A PLUS DE TENTATIVES !</h1>
            <p>Le nombre mystère était ${mysteryValue}</p>
        </section>

        <div id="bottom_btn">
            <a id="restart_btn">Rejouer</a>
            <a id="leave_btn">Quitter</a>
        </div>`

    const restartBtn = container.querySelector('#restart_btn')
    restartBtn.addEventListener('click', () => {
        createConfigGame()
    })
    
    const leaveBtn = container.querySelector('#leave_btn')
    leaveBtn.addEventListener('click', () => {
        createHome()
    })
}



export function createHome(){
    container.innerHTML = `
        <section id="presentation">
            <h1>TROUVE LE NOMBRE MYSTÈRE !</h1>
            <p>Essaye de trouver le nombre mystère défini de manière secrète par l'ordinateur. Pour cela, profite des multiples tentatives à ta disposition ainsi que des indices venant après chacune d'entre-elles pour t'en rapprocher et potentiellement le découvrir. Le jeu est trop simple ? Aucun problème, règle la difficulté en début de partie et met toi au défi !</p>
        </section>
        <section id="infos">
            <div>
                <img src="./img/try.svg" alt="">
                <p>Maximum de 7 tentatives par partie</p>
            </div>
            <div>
                <img src="./img/settings.svg" alt="">
                <p>Difficulté réglable, se basant sur la plage de définition du nombre mystère</p>
            </div>
            <div>
                <img src="./img/score.svg" alt="">
                <p>Score calculé propotionnellement à la difficulté, ainsi qu'a votre nombre de tentatives</p>
            </div>
        </section>
        <a id="play_btn">Jouer</a>
        <section id="scores">
            <h1>SCORES</h1>
            <table>
            <thead id="tab_head">
                <tr>
                    <th>N°</th>
                    <th>Pseudo</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody id="list-scores">
                </tbody>
            </table>
        </section>`

    createScoreboard()
    const play_btn = container.querySelector('#play_btn')

    play_btn.addEventListener('click', () => {
        createConfigGame()
    })
}

function createScoreboard(){
    const listScores = document.querySelector('#list-scores')
    listScores.innerHTML = ''
    let i = 1
    
    let scoreboard = displayScores()

    scoreboard.forEach(score => {
        listScores.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${score.username}</td>
                <td>${score.score}</td>
            </tr>`
        i++
    })
}

function showSpecificRankScoreboard(){
    const listScores = document.querySelector('#list-scores')
    Array.from(listScores.children).forEach(row => {
        if (Array.from(row.children)[1].textContent === game.playerName){
            row.id = 'rankPlayer'
        }
    })
}