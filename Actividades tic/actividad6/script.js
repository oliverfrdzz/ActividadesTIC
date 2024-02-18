function comprobar(){
    let num = parseInt(document.getElementById("num").value);

    if(num%2==0){
        document.getElementById("resultado").innerHTML = "Es par"
    }
    else{
        document.getElementById("resultado").innerHTML = "Es impar"
    }
}