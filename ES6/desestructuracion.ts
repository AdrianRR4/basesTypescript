(()=>{

    type Avengers={
        nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
    }


    const avengers:Avengers={
        nick:'Samuel L. Jackson',
        ironman:'Rober Jr',
        vision:'Paul Bettaty',
        activo:true,
        poder:1500    
    }

   // const {poder, vision}=avengers
    //console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger=({ironman,...resto}:Avengers)=>{
        console.log(ironman, resto);
    }
    printAvenger(avengers);

//desestructuración de arreglos


    const avengerArr: [string, boolean, number]=   ['Cap', false,123];

    const [capitan,mquinaDeGuerra,verde]=avengerArr;
    console.log({mquinaDeGuerra,verde});    
})()