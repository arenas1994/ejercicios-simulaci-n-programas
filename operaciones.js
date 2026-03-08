function calculadora(numero1, numero2, operacion) {

    if (operacion == "sumar") {
        console.log(numero1 + numero2);
    }

    if (operacion == "restar") {
        console.log(numero1 - numero2);
    }

    if (operacion == "multiplicar") {
        console.log(numero1 * numero2);
    }

}

calculadora(10, 5, "sumar");
