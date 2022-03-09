(()=>{

    class Anvenger{

        name;
        power;

        constructor(name='No name', power=123){
            this.name=name,
            this.power=power; 
        }

    }

    class FlayingAvenger extends Anvenger{

        flaying;

        constructor(name, power) {
            super(name, power);
            this.flaying=true;
            
        }

    }


    const hulk=new Anvenger();
    const falcon=new FlayingAvenger('Falcon',50);
    console.log(hulk);
    console.log(falcon);
})()