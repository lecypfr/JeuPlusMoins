import {init} from "./app.js"

const logoApp = document.querySelector("header img")

window.addEventListener('load', () => {
    init()

    logoApp.addEventListener('click', () => {
        location.reload()
    })
})
