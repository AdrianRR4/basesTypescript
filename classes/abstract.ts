
(()=>{


  abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ) {
            
        }
    }

    class Xmen extends Mutante{   }

    class Villans extends Mutante{}

const wolwerine=new Xmen('wolwerine','logan');

const magneto=new Xmen('mageneto','magnus');
console.log(wolwerine);
console.log(magneto)

})()