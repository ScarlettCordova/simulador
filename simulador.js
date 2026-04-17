//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
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

}