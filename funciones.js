//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let valorDisponible=0;
    valorDisponible=ingresos-egresos;
    if (valorDisponible<0){
        return"0";
    }
    return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago=0;
    capacidadPago=montoDisponible/2;
    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interesPagar=0;
    interesPagar=monto*(tasa/100)*plazoAnios;
    return interesPagar;
}
