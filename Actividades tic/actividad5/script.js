function calcular(){
    let num1 =  parseInt(document.getElementById("num1").value, 0);
    let num2 =  parseInt(document.getElementById("num2").value, 0);
    document.getElementById("resultado").innerHTML = "Primer valor: "+num1+"<br> Segundo valor: "+num2+"<br> Suma: "+(num1+num2)+"<br> Resta: "+(num1-num2)+"<br> Producto: "+(num1*num2)+"<br> División: "+(num1/num2)+"<br> Resto: "+(num1%num2);
}
