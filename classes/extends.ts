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
        getFullNameDesdeXmen(){
            console.log(super.getFullname())
        }
    }

    //const wolwerine= new Xmen('wolwerine', 'logan', false);

    //console.log(wolwerine);

    //console.log(wolwerine.getFullNameDesdeXmen())
    
    
})()