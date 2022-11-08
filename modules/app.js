import { configGameRender, startGameRender } from "./ui.js"

const play_btn = document.querySelector('#play_btn')

export function init(){
    play_btn.addEventListener('click', () => {
        configGameRender()
        console.log("Arrive dans settings")
        
        const start_btn = document.querySelector('#start_btn')
        start_btn.addEventListener('click', () => {
            startGameRender()
            console.log("Arrive dans game")

            const check_btn = document.querySelector('#check_btn')
            check_btn.addEventListener('click', () => {
                
            })
        })
    })
}

