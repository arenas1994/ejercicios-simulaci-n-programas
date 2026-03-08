function cajero(saldo, retiro) {

    if (retiro <= saldo) {

        let nuevoSaldo = saldo - retiro;

        console.log("Retiro exitoso");
        console.log("Nuevo saldo: " + nuevoSaldo);

    } else {

        console.log("Fondos insuficientes");

    }

}

cajero(500000, 200000);
