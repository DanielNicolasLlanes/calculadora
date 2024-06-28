//document.addEventListener("DOMContentLoaded", () => {

// Se extraen las etiquetas necesarias para manejar sus valores:
let pantalla = document.getElementById("pantalla_calc");
let numeros = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operador");
let tecla_c = document.getElementById("tecla-c");
let eliminar = document.getElementById("tecla-del");
let operacion = "";
let operando_a = "";
let operando_b = "";

// Se crea un bucle a travez de las teclas para asignarles una función para manejar la interrupcion del click:
for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener("click", () => {
        // Si la operación esta vacía escribimos sobre el operando a:
        if (operacion === ""){
            let valor = numeros[i].innerText;
            // Si el valor ingresado es un simbolo igual, la pantalla muestra lo escrito hasta ahora:
            if (valor === "="){
                if (operacion === ""){
                    pantalla.innerText = operando_a;
                }
                pantalla.innerText = operando_a;
            // Si el valor ingresado es un punto, se crea una bifurcación para manejar el caso:
            }else if (valor === "."){
                if (operacion === ""){
                    if(!(operando_a.includes("."))){
                        operando_a += valor;
                        pantalla.innerText += valor;
                    }
                }
            }else{
                if (operacion === ""){
                    operando_a += valor;
                    pantalla.innerText += valor;
                }
            }
        }else{
            // Cuando se comienza a escribir el operando b se reinicia la variable de la pantalla: 
            if (operando_b === ""){
                pantalla.innerText = "";
            }
            // De igual manera se crea la variable valor para manejar el caso de que un punto sea escrito:
            let valor_b = numeros[i].innerText;
            if (valor_b === "."){
                if (!(operando_b.includes("."))){
                    operando_b += valor_b;
                    pantalla.innerText += valor_b;
                }
            }else{
                operando_b += valor_b;
                pantalla.innerText = operando_b;
        }
        
         
    }});
}

// Se le asigna el significado a los simbolos de operación mediante un switch:
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
//Cuando el botón igual es presiondado, se convierten los operandos a valores flotantes y se realiza la operación necesaria:
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
// La tecla C de la calculadora reinicia todas las variables:
tecla_c.addEventListener("click", () => {
    operando_a = "";
    operando_b = "";
    operacion = "";
    pantalla.innerText = "";
})
// Cuando la tecla de eliminar sea presionada, eliminara un número del primer o segundo operando, según el caso:
eliminar.addEventListener("click", () =>{
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