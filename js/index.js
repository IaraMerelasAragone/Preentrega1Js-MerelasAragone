class Negocio {
    constructor(nombre, direccion, propietario) {
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
    }

    abierto(horario) {
        if (horario >= 8 && horario <= 17){
            return true
        } else {
            return false
        }
    }
}

const tienda1 = new Negocio("Controll Automatizacion", "Primero de Mayo 454", "Controll Automatizacion S.A.")

let valor = true

while (valor) {
    let entrada = parseInt(prompt("Bienvenido a Controll Automatizacion!" + "\nIngrese la hora en punto (24 hs.) en la que desea saber si estamos abiertos (o escriba -1 para salir):"))

    if (entrada === -1) {
        valor = false;
        alert("Puede continuar visitando nuesta web.")
    } else {
        if (tienda1.abierto(entrada)) {
            alert("La tienda está abierta a la/s " + entrada)
        } else {
            alert("La tienda está cerrada a la/s " + entrada)
        }
    }
}