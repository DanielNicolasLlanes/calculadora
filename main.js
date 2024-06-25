//document.addEventListener("DOMContentLoaded", () => {


let pantalla = document.getElementById("pantalla_calc");
let numeros = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operador");
let tecla_c = document.getElementById("tecla-c");
let del = document.getElementById("tecla-del");
let operacion = "";
let operando_a = "";
let operando_b = "";

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", () => {
        if (operacion === ""){
            //if (!(operando_a.includes("."))){
                operando_a += numeros[i].innerText;
                pantalla.innerText += numeros[i].innerText;
            //}
            
            //console.log(operando_a)
        }else{
            if (operando_b === ""){
                pantalla.innerText = "";
            }
            operando_b += numeros[i].innerText;
            //console.log(operando_b)
            pantalla.innerText = operando_b;
        }
        
         
    });
}
//});

for (let i = 0; i < operaciones.length; i++) { 
    operaciones[i].addEventListener("click", () => {
        switch (operaciones[i].innerText){
            case "+":
                operacion = "suma"
                break;
            case "-":
                operacion = "resta"
                break;
            case "x":
                operacion = "multiplicacion"
                break;
            case "/":
                operacion = "division"
                break;
            default:
                console.log("operacion no valida");
        }
        console.log(operacion)
});
}

igual.addEventListener("click", () => {
    operando_a = parseFloat(operando_a);
    operando_b = parseFloat(operando_b);
    switch (operacion) {
        case "suma":
            pantalla.innerText = operando_a + operando_b;
            break;
        case "resta":
            pantalla.innerText = operando_a - operando_b;
            break;
        case "multiplicacion":
            pantalla.innerText = operando_a * operando_b;
            break;
        case "division":
            pantalla.innerText = operando_a / operando_b;
            break;
        default:
            console.log("operacion no valida")
            break;
    }


})

tecla_c.addEventListener("click", () => {
    operando_a = "";
    operando_b = "";
    operacion = "";
    pantalla.innerText = "";
})

del.addEventListener("click", () =>{
    if(operacion === ""){
         operando_a = operando_a.slice(0, -1);
         pantalla.innerText = operando_a;
         console.log(operando_a);
    }else{
        operando_b = operando_b.slice(0, -1);
        pantalla.innerText = operando_b;
        console.log(operando_b);
    }
})