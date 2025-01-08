const stringhe= ['pippo', 'PLUTO', 'Paperino','paperinO','PaPeRinO'] ;
const capitalizedStringhe=[];

function capitalize(stringa) {
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
    // la var stringa lo trata come un'array
    // il primo char che lo trova su index 0 lo fa maiuscola
    //il resto dell'array lo fa minuscola
}
/*
console.log(capitalize("pippo")) ; // => "Pippo"
console.log(capitalize("PLUTO"));// => "Pluto
console.log(capitalize("Paperino"));  // => "Paperino"
console.log(capitalize("paperinO"));  // => "Paperino"
console.log(capitalize("PaPeRinO"));  // => "Paperino"
*/

for (let index = 0; index <   stringhe.length; index++) {
    const element = stringhe[index];
    const capitalizedElement=capitalize(element);
    console.log(capitalizedElement);
    capitalizedStringhe.push(capitalizedElement);
}
console.log(capitalizedStringhe);

document.getElementById("demo1").innerHTML = "<p> Il primo array  delle stringhe è: </p> <u>" + stringhe + "</u>"; 
document.getElementById("demo2").innerHTML = "<p> Il secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola è: </p> <u>" + capitalizedStringhe + "</u>"; 