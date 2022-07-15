const p2 = document.createElement("p");
p2.innerText = "O número que você colocou é ímpar";

let orkut = function verify() {
    let campoTexto = document.querySelector("#textInput");
    let parag = document.querySelector("#textResult");

    if (campoTexto.value % 2 == 0) {
        parag.innerText = "O número que você colocou é par";
        parag.append(parag);
    } else {
        parag.innerText = "O número que você colocou é ímpar";
        parag.append(parag);
    }
};

const btn = (document.getElementById("verify").onclick = orkut);
