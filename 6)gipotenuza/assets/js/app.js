
    let a = +prompt (`Длина катета а = см`);
    console.log (`Длина катета а = ${a} см`);

    let b = +prompt (`Длина катета b = см`);
    console.log (`Длина катета b = ${b} см`);

    let c = Math.sqrt( (a **2) + (b **2) )
    console.log (`Длина гипотенузы = ${c} см`);

    alert (`Длина гипотенузы = ${c}см`);