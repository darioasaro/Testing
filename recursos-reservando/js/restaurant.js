var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    
    //---- * REFACTORIZADO CON FILTER * 
    
    this.horarios = this.horarios.filter(h => h != horarioReservado)
    
    //----usando splice

    // for (var i = 0; i < this.horarios.length; i++) {
    //     if (this.horarios[i] === horarioReservado) {
    //         this.horarios.splice(i, 1);
    //         return;
    //     }
    // }
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion <= 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        //----REFACTORIZACION modulando funciones
            return promedio(this.calificaciones)


        // var sumatoria = 0;
        // for (var i = 0; i < this.calificaciones.length; i++) {
        //     sumatoria += this.calificaciones[i]
        // }
        // var promedio = sumatoria / this.calificaciones.length;
        // return Math.round(promedio * 10) / 10;
    }

}
Restaurant.prototype.toString = function(){
    return 'Restaurant'
}
//-----REFACTORIZACION para funcion obtenerPromedio

function sumar(numeros){
    let total = 0;
    for(let i of numeros) total+=i;
    return total;

}
function promedio(numeros){
    return sumar(numeros)/numeros.length

}

//-----