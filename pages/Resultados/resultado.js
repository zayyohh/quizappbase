import { verificarTema, trocarTema } from "../../helpers/tema-helper";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body, botaoTema)
})


verifivarTema (body, botaoTema)