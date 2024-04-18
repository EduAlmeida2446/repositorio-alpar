const btnSala = document.getElementById("btnSala") 
btnSala.style.background = "red"
const btnQuarto = document.getElementById("btnQuarto")
btnQuarto.style.background = "red"
const btnBanheiro = document.getElementById("btnBanheiro")
btnBanheiro.style.background = "red"
const btnCozinha = document.getElementById("btnCozinha")
btnCozinha.style.background = "red"


// function OnOff (btn){
//     console.log("entrou")
//     if(btn.style.background =="red"){
//         btn.style.background = "green"

//     } else {
//         btn.style.background = "red"
//     }
// }
class Luz {
    constructor(btn) {
        if (btn.style.background === "red") {
            btn.style.background = "green";
            const textContent = btn.innerText;
            const newTextContent = textContent.replace("Desligado", "Ligado");
            btn.innerHTML = newTextContent;
        } else {
            btn.style.background = "red";
            const textContent = btn.innerText;
            const newTextContent = textContent.replace("Ligado", "Desligado");
            btn.innerHTML = newTextContent;
        }
    }

}
function getValue(btn) {
    new Luz(btn);
}