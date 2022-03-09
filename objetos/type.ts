(()=>{

    type Hero={
        
        name:string;
        age?:number;
        powers:string[];
        getName?:()=>string
    }

    let flash: Hero={
        name:'Barry Allen',
        age:24,
        powers:['Super velocidad', 'viajar en el tiempo']
    }

    let superman: Hero={
        name:'Bruce',
        age:34,
        powers:['Inteligencia'],
        getName(){
            return this.name;
        }
    }
    


})()