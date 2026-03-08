function envio(ciudad, valorCompra) {

    console.log("Ciudad: " + ciudad);

    if (valorCompra > 100000) {
        console.log("Envio gratis");
    } else {
        console.log("El envio tiene costo");
    }

}

envio("Cali", 150000);
