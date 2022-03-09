(()=>{


    type Avenger={
        name:string,
        weapon:string;
    }

    const ironMan:Avenger={
            
        name:'Ironman',
        weapon:'ArmorSuit'
    }
    const spiderman:Avenger={
            
        name:'Spider Man',
        weapon:'Telaraña'
    }
    const hulk:Avenger={
            
        name:'Hulk',
        weapon:'Fuerza bruta'
    }

    const avenger:Avenger[]=[ironMan,hulk,spiderman];

        for (const hero of avenger) {
                console.log(hero.name, hero.weapon);
        }
})()