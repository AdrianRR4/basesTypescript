(()=>{

    let flash: { name:string, age?:number,powers:string[], getName?:()=>string}={
        name:'Barry Allen',
        age:24,
        powers:['Super velocidad', 'viajar en el tiempo']
    }

    let superman: { name:string, age?:number,powers:string[], getName?:()=>string}={
        name:'Bruce',
        age:34,
        powers:['Inteligencia']
    }
    console.log(superman)
})()