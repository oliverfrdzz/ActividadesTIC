function comprobar(){
    let num = parseInt(document.getElementById("num").value, 0);

    if(num%2==0){
        document.getElementById("resultado").innerHTML = "Es par";
    }
    else{
        document.getElementById("resultado").innerHTML = "Es impar";
    }
}
