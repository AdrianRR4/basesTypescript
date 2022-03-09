(()=>{

    interface Client {
        name:string;
        age:number,
        address:Address;
        getFullAddress(id:string):string;
    }

    interface Address{
        id:number,
        zip:string,
        city: string
    }

    const clientn:Client={
        name:'Adrian',
        age:30, 
        address:{
            id:125,
            zip:'fdfs',
            city:'Merida'
        },
        getFullAddress(id:string){
        return this.address.city;
        }
    }

    const cliente2:Client={
    name:'Pedro',
    age:43,
    address:{
        city:'CdMx',
        id:234,
        zip:'Cd434DM'
    },
    getFullAddress(id:string){
        return this.address.city;
        }


    }
})