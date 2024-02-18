function MensajeIf(){
    let hora = parseInt(document.getElementById("hora").value, 0);

    if(hora>=0 && hora<=24){

        if(hora>=7 && hora<=11){
            document.getElementById("resultado").innerHTML = "Buenos días";
        }    
        else if(hora>11 && hora<=21){
            document.getElementById("resultado").innerHTML = "Buenas tardes";
        } 
        else{
            document.getElementById("resultado").innerHTML = "Buenas noches"; 
        } 
    }

    else{
        document.getElementById("resultado").innerHTML = "Introduzca una hora válida";
    }
}

function MensajeSwitch(){
    let hora = parseInt(document.getElementById("hora").value, 0);

    if(hora>=0 && hora<=24){

        switch(hora){
            case 7:
            case 8:
            case 9:
            case 10:
            case 11: 
                document.getElementById("resultado").innerHTML = "Buenos días";
            break;
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                document.getElementById("resultado").innerHTML = "Buenas tardes";
            break;
            default:
                document.getElementById("resultado").innerHTML = "Buenas noches";
            }
        }
        
    else{
        document.getElementById("result").innerHTML = "Introduzca una hora válida";
    }
}
