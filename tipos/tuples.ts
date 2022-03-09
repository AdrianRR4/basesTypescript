(()=>{

    /**Esta función es propia de typescript */

    const heroe:[string, number, boolean]=['Milo', 200, true];

    console.log('Antes',heroe)

    heroe[0]='Radamantys';
    heroe[1]=200;
    heroe[2]=false;

    console.log('Despues',heroe)

})()