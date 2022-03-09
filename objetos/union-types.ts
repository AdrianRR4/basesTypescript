(()=>{

    
    type Hero={
        
        name:string;
        age?:number;
        powers:number[];
        getName?:()=>string
    }
 
    let myCustomVariable:(string|number|Hero)='Adrian';
    console.log(typeof myCustomVariable); 

     myCustomVariable=20;
     console.log(typeof myCustomVariable);

     myCustomVariable={
      name:'Peter',
      age:19,
      powers:[1]   
     }

     console.log(myCustomVariable);    
})()