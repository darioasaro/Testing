
//-----Variables
const assert = chai.assert
var resto = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])
var restaurantes = [
    new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
    new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
    new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
    new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
    new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
    new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
    new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9])
]
var lista = new Listado(restaurantes)


//------------------------------COMIENZO DEL TEST------------------------------//


//----- Funcion Reservar Horario
describe('Eliminar un horario reservado',function(){
    it('desaparece el horario 15:00',function(){ 
        resto.reservarHorario('15:00')
        assert.notInclude(resto.horarios,'15:00','el horario ya no esta disponible')
    })
    it('si se reserva un horario inexistente el arreglo no se modifica',function(){
        let actual = [...resto.horarios]
        resto.reservarHorario('19:30')
        let posterior = resto.horarios
        assert.deepEqual(actual,posterior,'no se modifico')
    })
    it('si se quiere reservar pero, no se pasa parametro, el arreglo no se modifica',function(){
        let actual = [...resto.horarios]
        resto.reservarHorario()
        let posterior = resto.horarios
        assert.deepEqual(actual,posterior,'no se modifico')
    })
})

//----- Funcion Obtener Puntuacion
describe('obtener puntuacion',function(){
    it('El promedio deberia ser 6.6',function(){
        var prm = resto.obtenerPuntuacion()
        console.log(prm);
        
        assert.equal(prm,6.6,'promedio')

    })
    it('Al no tener calificaciones el promedio es 0',function(){
        resto.calificaciones = []
        var prm = resto.obtenerPuntuacion()
        console.log(prm);
        
        assert.equal(prm,0,'promedio')

    })
})

//-----Funcion Calificar

describe('Agregar calificacion',function(){
    it('Se suma la calificacion al array de calificaciones',function(){
        let actual = resto.calificaciones.length
        resto.calificar(6)
        let nuevo = resto.calificaciones.length

        assert.notEqual(nuevo,actual,'se agrego una calificacion')
        
        
        

    })
    it('Al agregar una calificacion mayor a 10 el array no se modifica',function(){
        let actual = resto.calificaciones.length
        resto.calificar(14)
        let nuevo = resto.calificaciones.length

        assert.equal(nuevo,actual,'no se agrego la calificacion')
        
        
        

    })
    it('Al agregar una calificacion menor a 0 el array no se modifica',function(){
        let actual = resto.calificaciones.length
        resto.calificar(-3)
        let nuevo = resto.calificaciones.length

        assert.equal(nuevo,actual,'no se agrego la calificacion')
        
        
        

    })
    it('Al agregar una calificacion decimal NO ENTERA (ej:4.0) el array no se modifica',function(){
        let actual = resto.calificaciones.length
        resto.calificar(4.5)
        let nuevo = resto.calificaciones.length

        assert.equal(nuevo,actual,'no se agrego la calificacion')
        
        
        

    })
})

//-------Funcion Buscar Restaurante

describe('Buscar restaurante',function(){
    it('Al ingresar un id valido dentro del array se devuelve el objeto restaurante',function(){
       
      
        
        var instancia = lista.buscarRestaurante(4)
        console.log(instancia.toString());
        
       
        
        
        assert.typeOf(instancia,"Object",'es una instancia de Restaurant')
        
    })
    it('Al ingresar un id invalido dentro del array se devuelve un mensaje',function(){
        var instancia = lista.buscarRestaurante(89)        
        assert.typeOf(instancia,"string",'es una instancia de Restaurant')
        
    })
})

describe('Obtener listado de Restaurantes',function(){
    it('Se obtiene un array con los restaurantes que coinciden con los filtros indicados',function(){
    
        var filter = lista.obtenerRestaurantes("Hamburguesa", "Berlín", "11:30")
        
        assert.typeOf(filter,'array','arreglo nuevo')
    }) 
})
