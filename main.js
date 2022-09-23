const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector("#calculo2");
const btnsum = document.querySelector("#btnsum");
const btnrest = document.querySelector("#btnrest");
const btndiv = document.querySelector("#btndiv");
const btnmult = document.querySelector("#btnmult");
const result = document.querySelector("#result");


btnsum.addEventListener("click", btnCLicksum);
btnrest.addEventListener("click", btnCLickrest);
btndiv.addEventListener("click", btnCLickdiv);
btnmult.addEventListener("click", btnCLickmult);

function btnCLicksum () {
    const suminputs = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = "resultado: " + suminputs;
}
function btnCLickrest () {
    const restinputs = parseInt(input1.value) - parseInt(input2.value);
    result.innerHTML = "resultado: " + restinputs;
}
function btnCLickdiv () {
    const divinputs = parseInt(input1.value) / parseInt(input2.value);
    result.innerHTML = "resultado: " + divinputs;
}
function btnCLickmult () {
    const multinputs = parseInt(input1.value) * parseInt(input2.value);
    result.innerHTML = "resultado: " + multinputs;
}