function comprobar() {
    let calificacion = parseInt(document.getElementById("nota").value, 0);
  
    if(calificacion >= 0 && calificacion <= 10){

        if(calificacion >= 5){
            document.getElementById("resultado").innerHTML = "Aprobado";
        } 
        else{
            document.getElementById("resultado").innerHTML = "Suspenso";
        }
    } 
    else{
        document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida.";
    }
}