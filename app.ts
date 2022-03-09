// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

interface Automovil{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;

}


const batimovil:Automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear:(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

interface Guason{
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

const reir = ( guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica  {
   (ciudadanos:string[]):number  

   }


const ciudadGotica:CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Propiedades{
  nombre:string;
  edad:number;
  sexo:boolean;
  estadoCiviL:boolean;
  imprimirBio(): void;
}

class Persona implements Propiedades {
    
    public edad: number;
    public estadoCiviL: boolean;
    public nombre: string;
    public sexo: boolean;
    public estadoCivil:string;
    imprimirBio(): void {
        
    }
   
}