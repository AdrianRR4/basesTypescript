(()=>{


    const fullName=(firstName:string, lastName?:string, uper:boolean=false):string=>{
       
       
        if(uper){
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }else {

        }
       
        return `${firstName} ${lastName || 'no lastName'}`;
    }

    //let noName:any
    const name=fullName('Saint', 'Seiya', true);    
    console.log({name});

})()