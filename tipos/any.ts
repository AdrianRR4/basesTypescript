(()=>{

    let avenger:any=123;
    let exist;
    let power;

    avenger='Topot';
    //console.log(avenger.charAt(0));
    console.log('CASTEO ',(avenger as string).charAt(1))//asignarle un tipo de dato casteo

    avenger = 123.45326;
    console.log('CASTEO VARIABLE NUMERICA FORMA 1',avenger.toFixed(3));
    console.log('CASTEO VARIABLE NUMERICA FORMA 2 ',<number>avenger.toFixed(1));
    
    console.log(exist);
    console.log(power);

})()