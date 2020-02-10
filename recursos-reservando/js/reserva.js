var Reserva = function(horario,cantidad,precio,codigo){
    this.Horario = horario || new Date()
    this.cantidadDePersonas = cantidad || 0;
    this.precioPorPersona = precio || 0;
    this.codigoDeDescuento = codigo || "";
    
    this.arrDeDescuentos =[

                {
                    nombre : 'DES15',
                    valor : 15
                },
                {
                    nombre : 'DES200',
                    valor : 200
                },
                {
                    nombre:'DES1',
                    valor : this.precioPorPersona
                }   

            ] 
        
        }

        
        

        
    
//---- En base a la cantidad y el precio por persona se calcula el precio base de la reserva
Reserva.prototype.getPrecioBase = function() {
    return this.cantidadDePersonas * this.precioPorPersona

}

//----- De acuerdo a la cantidad de personas se asigna el descuento si corresponde
Reserva.prototype.getDescuentoPorPersona = function(){
        let desc = 0;

        if(this.cantidadDePersonas>=4 && this.cantidadDePersonas<=6){
            desc = 5;
        }
        if(this.cantidadDePersonas== 7|| this.cantidadDePersonas == 8){
            desc = 10;
        }
        if(this.cantidadDePersonas > 8){
            desc = 15;
        }
        return desc;
}
//----De acuerdo al dia de la reserva si corresponde se asigna el adicional
Reserva.prototype.getAdicionalDia = function(){
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    
        
        
    let dia = dias[this.Horario.getDay()-1]
   
    
   
    
    
    
    var descuento = 0;

    if(dia =='Viernes'||dia=='Sabado'||dia=='Domingo'){
        descuento = 10

    }
        
    return descuento;
}

//----De acuerdo a la hora de la reserva se calcula el adicional si corresponde

Reserva.prototype.getAdicionalHora = function(){
    let desc = 0;
    let hora = this.Horario.getHours()
   
    if(hora>=13&&hora<=14|| hora>=20&&hora<=21){
        desc = 5;
    }
    return desc
}
//---- De acuerdo al codigo obtenido de la reserva se calcula el descuento
Reserva.prototype.getDescuentoPorCodigo = function(){
    
    let precio = this.getPrecioBase()
    let codigo = this.codigoDeDescuento
    let desc = this.arrDeDescuentos.find(desc=>desc.nombre==codigo)
     
    
    if(desc){
        
       
        
        if(desc.nombre == 'DES15'){
            
            
            precio = precio * 0.15
        }
        else{
            precio=desc.valor
        }
    }
    
      
        

    return precio;
}

//----- Se calcula el precio total con adicionales y descuentos
Reserva.prototype.getPrecioReserva = function(){
    
    let precio = this.getPrecioBase()
   
    //-----Adicionales y descuentos

    let adicHora = (precio*this.getAdicionalHora())/100
    let adicDia = (precio*this.getAdicionalDia())/100
    let descPersona = (precio*this.getDescuentoPorPersona())/100
    let descCodigo = this.getDescuentoPorCodigo()

    precio+=adicHora+adicDia-descPersona-descCodigo 
    
    return precio
}