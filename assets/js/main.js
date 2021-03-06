const precio = 2500;

document.querySelector("#precio").innerHTML = document.querySelector(".precio_2").innerHTML = `${
    new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(precio)
}`;

const input__cantidad = document.querySelector("#input__cantidad"); //Entrada como constante
const input__color = document.querySelector("#color"); //Entrada como constante
const button = document.querySelector(".btn2"); //Entrada como constante

var canasta__cantidad = document.querySelector(".canasta__cantidad"); //Salida como constante
var total = document.querySelector(".total"); //Salida como constante
var output__color = document.querySelector(".color"); //Salida como constante

function totalYColor() {
    let a = +input__cantidad.value;

    if (a != 0 && input__color.value != "" || a != "" && input__color.value != "") {
        total.innerHTML = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(a * precio);
        output__color.style.backgroundColor = input__color.value;
        canasta__cantidad.innerHTML = a;
        input__cantidad.value = "";
    } else {
        alert("ingrese una cantidad y un color valido")
        return
    }

}

// button.addEventListener("click", totalYColor);
input__color.addEventListener('focus', function() {
    input__color.value = "";
})
