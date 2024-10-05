let montoFinal = 0

let entrada = ""

const total = (valor) => montoFinal += valor

const saludoCliente = () => {
    entrada = prompt(
        `Revise y anote el nombre de el/los productos que desea consultar:
    . Levadizo Zed: $400.000
    . Corredizo DKC400: $300.000
    . BOB30: $ 250.000
    . BULL: $ 350.000
    . Control acceso: $60.000
    . Cerradura Magnética: $95.000
    . Tubular 50: $180.000
    . Roller black out: $200.000
    . Batcorr: $320.000
    . Tokey: $70.000
    
    Ingrese "salir" si desea finalizar la consulta.`)
}

const simuladorCompra = () => {
    saludoCliente();

    while (entrada.toLowerCase() !== "salir") {

        switch (entrada.toLowerCase()) {
            case "levadizo zed":
                total(400000)
                break
            case "corredizo dkc400":
                total(300000)
                break
            case "bob 30":
                total(250000)
                break
            case "bull":
                total(350000)
                break
            case "control acceso":
                total(60000)
                break
            case "cerradura magnetica":
                total(95000)
                break
            case "tubular 50":
                total(180000)
                break
            case "roller black out":
                total(200000)
                break
            case "batcorr":
                total(320000)
                break
            case "tokey":
                    total(70000)
                    break

            default:
                alert("Producto no válido. Intente nuevamente ingresando un producto de la lista.")
                break
        }
        entrada = prompt("Ingrese otro producto o escriba 'salir' para finalizar.")
    }

const calculoIva = montoFinal * 0.21

const montoConIva = montoFinal + calculoIva

    alert("El monto final de su consulta es: $" + montoFinal + "\niva (21%): $" + calculoIva.toFixed(2) + "\nTotal con iva:$" + montoConIva.toFixed(2))
}

simuladorCompra()


