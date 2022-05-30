let inicio = prompt("Ingresa un color");
while( inicio != "ESC"){ 
    switch (inicio){ 

        case "naranja":
            alert("ingresaste color naranja");
            break;

        case "rojo":
            alert("ingresaste color rojo");
            break;

        case "blanco":
            alert("ingresaste color blanco");
            break;

        case "negro":
            alert("ingresaste color negro");
            break;

        case "morado":
            alert("ingresaste color morado");
            break;

        case "rosa":
            alert("ingresaste color rosa");
            break;

        case "amarillo":
            alert("ingresaste color amarillo");
            break;

        case "azul":
            alert("ingresaste color azul");
            break;

        case "verde":
            alert("ingresaste color verde");
            break;

            default:
                alert("¿Cuál color ingresaste?")
             }
             inicio = prompt ("ingresa un color");
            }