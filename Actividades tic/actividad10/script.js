function calificar(){
    let alumnos = ["Pedro","Juan","Francisco","Rodrigo"];
    let notas = [];
    let i = 0;
    while(i<alumnos.length){
        notas[i]=parseInt(prompt("Introduce la nota de "+alumnos[i]))
        i++;
    }
    document.getElementById("resultado0").innerHTML= alumnos[0] + ": " + notas[0];
    document.getElementById("resultado1").innerHTML= alumnos[1] + ": " + notas[1];
    document.getElementById("resultado2").innerHTML= alumnos[2] + ": " + notas[2];
    document.getElementById("resultado3").innerHTML= alumnos[3] + ": " + notas[3];
}


