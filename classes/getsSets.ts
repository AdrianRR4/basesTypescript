(()=>{


    class Avenger{
        constructor(
        public name:string,
        public realName:string
        ){
            console.log('Consturctor Avenger llamando');
        }
        protected getFullname(){
            return  `${this.name} ${this.realName}`
    }
        
    }
  
    class Xmen extends Avenger{

        constructor(
            name:string,
            realName:string,
            public isMutand:boolean) 
            
            {
            super(name,realName);
         
        }

        get fullName(){//no recibe argumento 
            return `${this.name}- ${this.realName}`
        }

        set fullName(name:string){//si recibe argumento set no regresa nada, solo recibe un argumento         
            
            if(name.length<3){
                throw new Error('El nombre debe ser mayor de tres letras');
            }
            
            this.name=name;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullname())
        }
    }

    const wolwerine= new Xmen('wolwerine', 'logan', false);
    wolwerine.fullName='Aa';
    console.log(wolwerine.fullName);

    //console.log(wolwerine.getFullNameDesdeXmen())
    
    
    console.log('object');
    console.log('hol');
   
})()