const precioRascadorgato = 15000
const precioBolsaproplan = 8900
const precioJuguetegato = 5000
const precioPelota = 500
const precioPlato = 600

numeroDeCuotas(seleccioneProducto)

function numeroDeCuotas(producto, resultado,) {
    let numeroIngresado = parseInt(prompt("Tenemos 3 a 6 cuotas sin interes"))

    for (let i = 3; i <= 12; i++) {
        switch (producto) {
            case 1:
                {
                    let resultado = precioRascadorgato / i
                    alert(precioRascadorgato + " por " + i + "meses es=" + resultado);
                }
            case 2:
                {
                    let resultado = precioBolsaproplan / i
                    alert(precioBolsaproplan + " por " + i + "meses es=" + resultado);
                }
            case 3:
                {
                    let resultado = precioJuguetegato / i
                    alert(precioJuguetegato + " por " + i + "meses es=" + resultado);
                }
            case 4:
                {
                    let resultado = precioPelota / i
                    alert(precioPelota + " por " + i + "meses es=" + resultado);
                }
            case 5:
                {
                    let resultado = precioPlato / i
                    alert(precioPlato + " por " + i + "meses es=" + resultado);
                }
        }
    }
}