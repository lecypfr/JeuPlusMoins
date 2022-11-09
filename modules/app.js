import { checkValueRender, configGameRender, startGameRender } from "./ui.js"

const play_btn = document.querySelector('#play_btn')

export function init(){
    play_btn.addEventListener('click', () => {
        try{
            configGameRender()
        } catch(e){
            console.log(e)
        }
        
        const start_btn = document.querySelector('#start_btn')
        start_btn.addEventListener('click', () => {
            try{
                startGameRender()
            } catch(e){
                console.log(e)
            }

            try{
                const check_btn = document.querySelector('#check_btn')
                check_btn.addEventListener('click', () => {
                    checkValueRender()
                })
            } catch {
                console.log("Paramètres invalide. La partie ne peut pas commencer")
            }
        })
    })
}