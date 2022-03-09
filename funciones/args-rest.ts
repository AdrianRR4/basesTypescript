 (()=>{

    const fullName=(firstName:string,...restArgs:string[]):string=>{
        return `${firstName} ${restArgs.join(' ')}`
    }

        const superman=fullName('Clarck','Josep','Ken')

console.log({superman})

 })()