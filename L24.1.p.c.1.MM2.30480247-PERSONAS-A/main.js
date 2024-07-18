class Personas{
    constructor(nombre, sexo){
        this.nombre = nombre
        this.sexo = sexo
    }
}

class Procesos{
    constructor(){
        this.contador_femenino=0,
        this.contador_masculino=0
    }

    procesarPersonas(p){
        if(p.sexo == "F"){
            this.contador_femenino++
        }else if(p.sexo == "M"){
            this.contador_masculino++

        }
    }
    porcentajeMujeres(){
        return ((this.contador_femenino / (this.contador_femenino + this.contador_masculino)) * 100).toFixed(2) + "%"
    }
    sexoMayor(){
        if(this.contador_masculino > this.contador_femenino){
            return "Hay mas hombres"
        }else if(this.contador_femenino > this.contador_masculino){
            return "Hay mas mujeres"
        }else{
            return "Hay sexos por igual"
        }
    }
}

let persona1 = new Personas("Luisa", "F")
let persona2 = new Personas("Ana", "F")
let persona3 = new Personas("Jose", "M")
let persona4 = new Personas("Carmen", "F")
let persona5 = new Personas("Rosa", "F")
let persona6 = new Personas("Jose", "M")
let persona7 = new Personas("Maria", "F")
let persona8 = new Personas("Luz", "F")
let persona9 = new Personas("Rafael", "M")
let persona10 = new Personas("Liz", "F")
let persona11 = new Personas("Marcos", "M")
let persona12 = new Personas("Leo", "M")

let personas_procesos = new Procesos()

personas_procesos.procesarPersonas(persona1)
personas_procesos.procesarPersonas(persona2)
personas_procesos.procesarPersonas(persona3)
personas_procesos.procesarPersonas(persona4)
personas_procesos.procesarPersonas(persona5)
personas_procesos.procesarPersonas(persona6)
personas_procesos.procesarPersonas(persona7)
personas_procesos.procesarPersonas(persona8)
personas_procesos.procesarPersonas(persona9)
personas_procesos.procesarPersonas(persona10)
personas_procesos.procesarPersonas(persona11)
personas_procesos.procesarPersonas(persona12)

let salida = document.getElementById("salida")

salida.innerHTML = `

Porcentaje de mujeres procesadas: ${personas_procesos.porcentajeMujeres()}<br>
${personas_procesos.sexoMayor()}

`