class Negocio {
    constructor(nombre, esInstalador) {
        this.nombre = nombre
        this.esInstalador = esInstalador
    }
}

let entrada = ""
let continua = true

do {
    let nombre = prompt("Ingrese su nombre o escriba 'salir' para terminar:")

    if (nombre.toLowerCase() === 'salir'){
        break
    }

    let esInstalador = confirm("¿Es instalador? (Aceptar si lo es, cancelar si no lo es).")

let local = new Negocio (nombre, esInstalador)

    entrada += "Nombre: " + local.nombre + "\n" +
        "Es instalador: " + (local.esInstalador ? "Sí" : "No") + "\n\n"

    if (local.esInstalador) {
        alert("¡Gracias por ser parte del gremio! Ofrecemos productos para instaladores. Llene el formulario y nos comunicaremos con usted a la brevedad.")
    } else {
        alert("Podemos contactarlo con un instalador para sus necesidades. Llene el formulario y nos comunicaremos con usted a la brevedad.")
    }

    continua = confirm("Desea continuar visitando nuestra web")

} while (continua)

console.log(entrada)