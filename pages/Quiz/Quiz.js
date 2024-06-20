import { verificarTema, trocarTema } from "../../helpers/tema-helper";
import { verificarTema, trocarTema } from "../../helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")
@@ -8,4 +8,19 @@ botaoTema.addEventListener("click", () => {
})


verifivarTema (body, botaoTema)
verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")

function alternarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLocaleLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alternarAssunto()