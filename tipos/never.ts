(()=>{

    const error=(message:string):(never|number)=>{

        

        if(false){
            throw new Error(message)
        }
        return 1;
    }

    error('Ejemplo');
    console.log('Hola mundo')

})()