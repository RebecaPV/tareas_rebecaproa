//TAREA SIMULADOR
let inicio= parseInt (prompt('Ingesa tu signo zodiacal.'));
switch(inicio){
    case "aries":
        alert("Bienvenido Aries");
        break;

        case "tauro":
        alert("Bienvenido Tauro");
        break;

        case "geminis":
        alert("Bienvenido Géminis");
        break;

        case "cancer":
        alert("Bienvenido Cáncer");
        break;

        case "leo":
        alert("Bienvenido Leo");
        break;

        case "virgo":
        alert("Bienvenido Virgo");
        break;

        case "libra":
        alert("Bienvenido Libra");
        break;

        case "escorpio":
        alert("Bienvenido Escorpio");
        break;

        case "sagitario":
        alert("Bienvenido Sagitario");
        break;

        case "capricornio":
        alert("Bienvenido Capricornio");
        break;

        case "acuario":
        alert("Bienvenido Acuario");
        break;

        case "piscis":
        alert("Bienvenido Piscis");
        break;

        default:
            alert('Nombre no existente, Ingresa tu signo zodiacal');
}

let edadPersona1= parseInt(prompt('Ingresa tu edaad por favor'));
let edadPersona2= parseInt(prompt('Ingresa tu edaad por favor'));
let edadPersona3= parseInt(prompt('Ingresa tu edaad por favor'));
let edadPersona4= parseInt(prompt('Ingresa tu edaad por favor'));
let promedio 

promedio= (edadPersona1+edadPersona2+edadPersona3+edadPersona4/4);

if (promedio <= 20) {
    alert("Tu usuario es genercion"+ " "+ "Z");
}
else if (promedio >20  <=42) {
    alert("Tu usuario es genercion"+ " "+ "Y");
}
else if (promedio >42  <=62) {
    alert("Tu usuario es genercion"+ " "+ "X");
}