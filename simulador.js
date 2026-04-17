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
    //Cajas de texto
    cmpIngresosFloat=document.getElementById("txtIngresos");
    cmpEgresosFloat=document.getElementById("txtEgresos");
    ingresosFloat=parseFloat(cmpIngresosFloat.value);
    egresosFloat=parseFloat(cmpEgresosFloat.value);
    //Función 1
    valorDisponibleFloat=calcularDisponible(ingresosFloat,egresosFloat);
    total=document.getElementById("spnDisponible");
    total.innerText=valorDisponibleFloat;
    //Función 2
    monto=calcularCapacidadPago(valorDisponibleFloat);
    capacidadPago=document.getElementById("spnCapacidadPago");
    capacidadPago.innerText=monto;
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
    interesPagar.innerText=calculos;
}