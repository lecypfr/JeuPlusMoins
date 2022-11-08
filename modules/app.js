const container = document.querySelector('#container')

export function init(){
    const play_btn = document.querySelector('#play_btn')
    play_btn.addEventListener('click', () => {
        console.log("Arrive dans settings")
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
        <a id="start_btn">Commencer</a>`

        const start_btn = document.querySelector('#start_btn')
        start_btn.addEventListener('click', () => {
            console.log("Arrive dans game")
            container.innerHTML = `
            <section id="game">
                <h1>QUEL NOMBRE PROPOSE-TU ?</h1>
                <div id="attempts">
                    <p>2</p>
                    <p>/</p>
                    <p>7</p>
                </div>
                <div id="game_infos">
                    <p>780</p>
                    <p>></p>
                    <input type="number" id="value_input" placeholder="42" required>
                    <p>></p>
                    <p>2530</p>
                </div>
                <p id="clue">Le nombre est plus grand !</p>
            </section>
            <a id="check_btn">Vérifier</a>`
        })
    })
}

