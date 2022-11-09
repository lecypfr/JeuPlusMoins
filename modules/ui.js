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
        configData = {
            playerName: playerName.value,
            intervalBegin: intervalBegin.value,
            intervalEnd: intervalEnd.value
        }

        try{
            sessionStorage.setItem("configData", JSON.stringify(configData))
        } catch (e){
            console.log(e)
        }

        container.innerHTML = `
        <section id="game">
            <h1>QUEL NOMBRE PROPOSE-TU ?</h1>
            <div id="attempts">
                <p>2</p>
                <p>/</p>
                <p>7</p>
            </div>
            <div id="game_infos">
                <p>${configData.intervalBegin}</p>
                <p>></p>
                <input type="number" id="value_input" placeholder="42" required>
                <p>></p>
                <p>${configData.intervalEnd}</p>
            </div>
        </section>
        <a id="check_btn">Vérifier</a>
        <p id="check_msg"></p>`
    }
}

export function checkValueRender(){
    const valueInput = document.querySelector('#value_input')
    const checkMessage = document.querySelector('#check_msg')

    if(valueInput.value === ""){
        console.log("check")
        checkMessage.innerText = "Il faut que tu propose un nombre avant de vérifier"
    } else{
        checkMessage.innerText = ""
    }
}