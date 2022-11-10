import {Game} from "./Game.js"
import { checkValue } from "./checkValue.js"


const container = document.querySelector('#container')

export function configGameRender(){
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
            <div id="slider">
                <div id="progress"></div>
            </div>
        </div>
    </section>
    <a id="start_btn">Commencer</a>
    <p id="error_msg"></p>`
}

export function startGameRender(){
    const playerName = document.querySelector('#name_input')
    const intervalBegin = document.querySelector('#input_min')
    const intervalEnd = document.querySelector('#input_max')
    const errorMessage = document.querySelector('#error_msg')

    let configData = {}

    if(playerName.value === ""){
        errorMessage.innerText = "Veuillez renseigner un pseudo"
    } else if(intervalBegin.value < 0 || intervalBegin.value === ""){
        errorMessage.innerText = "Veuillez rentrer une valeur minimale, supérieur ou égale à 0"
    } else if(intervalEnd.value > 7500 || intervalEnd.value === ""){
        errorMessage.innerText = "Veuillez rentrer une valeur maximale, inférieur ou égale à 7500"
        console.log("Erreur 7500")
    } else{

        let game = new Game(playerName.value, {
            minValue: intervalBegin.value,
            maxValue: intervalEnd.value
        })

        try{
            sessionStorage.setItem("gameData", JSON.stringify(game))
        } catch (e){
            console.log(e)
        }

        container.innerHTML = `
        <section id="game">
            <h1>QUEL NOMBRE PROPOSE-TU ?</h1>
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
    }
}

export function checkValueRender(){
    const valueInput = document.querySelector('#value_input')
    const checkMessage = document.querySelector('#check_msg')
    const attempts = document.querySelector('#attempts p')

    let sessionGameData = {}

    if(sessionStorage.getItem("gameData")){
        sessionGameData = JSON.parse(sessionStorage.getItem("gameData"))
    }
    console.log(sessionGameData)

    if(valueInput.value != "" && valueInput.value >= sessionGameData.difficultyRange.minValue && valueInput.value <= sessionGameData.difficultyRange.maxValue){
        checkMessage.innerText = ""
        console.log("Ca test le nombre")
        checkMessage.innerText = checkValue(sessionGameData,parseInt(valueInput.value))
        checkMessage.style.color = '#ccff33'
    } else if(valueInput.value === ""){
        checkMessage.style.color = '#dd0303'
        checkMessage.innerText = "Veuillez proposer un nombre avant de vérifier"
    } else if(valueInput.value < sessionGameData.difficultyRange.minValue){
        checkMessage.style.color = '#dd0303'
        checkMessage.innerText = `Veuillez proposer un nombre supérieur ou égal à ${sessionGameData.difficultyRange.minValue}`
    } else if(valueInput.value > sessionGameData.difficultyRange.maxValue){
        checkMessage.style.color = '#dd0303'
        checkMessage.innerText = `Veuillez proposer un nombre inférieur ou égal à ${sessionGameData.difficultyRange.maxValue}`
    }
}




// configData = {
//     playerName: playerName.value,
//     intervalBegin: intervalBegin.value,
//     intervalEnd: intervalEnd.value
// }

// try{
//     sessionStorage.setItem("configData", JSON.stringify(configData))
// } catch (e){
//     console.log(e)
// }