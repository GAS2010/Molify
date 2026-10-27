
const calcularBtn = document.getElementById("calcular");


function calcularMols() {
const qtd_mols = document.getElementById("valor_mols");
const massa_molar = document.getElementById("massa-molar");
const peso = document.getElementById("peso");
const volume = document.getElementById("volume");

let massa = qtd_mols.value * massa_molar.value;
peso.innerHTML = massa.toFixed(2) + "<small> g</small>";

let volumeCalculado = qtd_mols.value * 22.4; // Volume molar em CNTP
volume.innerHTML = volumeCalculado.toFixed(2) + "<small> L</small>";
}
calcularBtn.addEventListener("click", calcularMols);
