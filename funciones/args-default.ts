(()=>{


    const fullName=(firstName:string, lastName?:string, uper:boolean=false):string=>{
        return `${firstName} ${lastName || 'no lastName'}`;
    }

    //let noName:any
    const name=fullName('Saint');
    console.log({name});

})()