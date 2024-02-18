function factorial(){
    let fact = 1;
    let num = parseInt(document.getElementById("num").value, 0);
    let i = 1;
    while(i<=num){
        fact = fact*i;
        i++;
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + fact;
}



