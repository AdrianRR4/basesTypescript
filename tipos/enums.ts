(()=>{

    enum AudioLevel{
        min=1,
        medium=5,
        max=10,
    }

    let currentAudio:AudioLevel=AudioLevel.max;
    console.log(currentAudio);

    console.log('Constante objeto',AudioLevel);


    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;

    enum LevelPower{
     min=fuerzaAcuaman,
      medium=fuerzaFlash,
      max=fuerzaSuperman
    }
    console.log(LevelPower);

    let ejemplo=` hola `
  console.log(ejemplo)
})()