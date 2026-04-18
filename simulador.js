//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    if (!validarFormulario()) {
        return; // Detiene el cálculo si hay errores
    }

    let ingresosFloat=0;
    let egresosFloat=0;
    let cmpIngresosFloat;
    let cmpEgresosFloat;

    let valorDisponibleFloat;
    let total;

    let monto;
    let capacidadPago;

    let cmpMonto;
    let cmpPlazoAnios;
    let cmpTasa;
    let montoFloat;
    let plazoAniosEntero;
    let tasaFloat;

    let calculos;
    let interesPagar;

    let suma;
    let totalPagar;

    let cuotaMensual;
    let lblCuotaValor;

    let aprobar;
    let lblAprobarCredito;

    //Cajas de texto
    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);
    //Función 1
    valorDisponibleFloat=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=valorDisponibleFloat.toFixed(2);
    //Función 2
    monto=calcularCapacidadPago(valorDisponibleFloat);
    capacidadPago=document.getElementById("spnCapacidadPago");
    capacidadPago.innerText=monto.toFixed(2);
    //Cjas de texto 2
    cmpMonto=document.getElementById("txtMonto");
    cmpPlazoAnios=document.getElementById("txtPlazo");
    cmpTasa=document.getElementById("txtTasaInteres");
    montoFloat=parseFloat(cmpMonto.value);
    plazoAniosEntero=parseInt(cmpPlazoAnios.value);
    tasaFloat=parseFloat(cmpTasa.value);
    //Función 3
    calculos=calcularInteresSimple(montoFloat,tasaFloat,plazoAniosEntero);
    interesPagar=document.getElementById("spnInteresPagar");
    interesPagar.innerText=calculos.toFixed(2);
    //Función 4
    suma=calcularTotalPagar(montoFloat,calculos);
    totalPagar=document.getElementById("spnTotalPrestamo");
    totalPagar.innerText=suma.toFixed(2);
    //Función 5
    cuotaMensual=calcularCuotaMensual(suma,plazoAniosEntero);
    lblCuotaValor=document.getElementById("spnCuotaMensual");
    lblCuotaValor.innerText=cuotaMensual.toFixed(2);
    //Función 6
    aprobar=aprobarCredito(monto,cuotaMensual);
    lblAprobarCredito=document.getElementById("spnEstadoCredito");
    if (aprobar){
        lblAprobarCredito.innerText="CREDITO APROBADO";
    }else{
        lblAprobarCredito.innerText="CREDITO RECHAZADO";
    }
}

function reiniciar(){
    document.getElementById("txtIngresos").value="";
    document.getElementById("txtEgresos").value="";
    document.getElementById("txtMonto").value="";
    document.getElementById("txtPlazo").value="";
    document.getElementById("txtTasaInteres").value="";
    document.getElementById("spnDisponible").innerText="";
    document.getElementById("spnCapacidadPago").innerText="";
    document.getElementById("spnInteresPagar").innerText="";
    document.getElementById("spnTotalPrestamo").innerText="";
    document.getElementById("spnCuotaMensual").innerText="";
    document.getElementById("spnEstadoCredito").innerText="ANALIZANDO...";
    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";

}

function validarFormulario() {
    let valido = true;

    valido &= validarCampo("txtIngresos", "errorIngresos", 1, 100000);
    valido &= validarCampo("txtEgresos", "errorEgresos", 1, 100000);
    valido &= validarCampo("txtMonto", "errorMonto", 100, 150000);
    valido &= validarCampo("txtPlazo", "errorPlazo", 1, 20);
    valido &= validarCampo("txtTasaInteres", "errorTasaInteres", 7, 15);

    return !!valido;
}

function validarCampo(inputId, errorId, min, max) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    const valor = input.value.trim();

    error.textContent = "";

    // Vacío
    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
        return false;
    }

    // Convertir a número
    const numero = Number(valor);

    // Validar que sea número
    if (isNaN(numero)) {
        error.textContent = "Solo se permiten números";
        return false;
    }

    // Validar enteros positivos
    if (numero < 0) {
        error.textContent = "Debe ser un número positivo";
        return false;
    }

    // Validar rango
    if (numero < min || numero > max) {
        error.textContent = `Debe estar entre ${min} y ${max}`;
        return false;
    }

    return true;
}