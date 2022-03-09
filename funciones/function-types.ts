(()=>{

    const addNumbers=(a:number, b:number):number=>a+b;
    const greet=(name:string)=>`hola ${name}`;
    const saveTheWorld=()=> `El mundo esta salvado!`;

    let myFunction:()=>string;

    //myFunction=10;
   // console.log(myFunction);

    //myFunction=addNumbers;  //Con tipo number
    //console.log(myFunction(3,5));

   // myFunction=greet;/// con tipo string
   // console.log(myFunction('que hay'));

    myFunction=saveTheWorld;  //sin argumento
    console.log(myFunction());


})()