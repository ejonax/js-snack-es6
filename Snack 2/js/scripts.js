const stringhe= ['pippo', 'PLUTO', 'Paperino','paperinO','PaPeRinO'] ;
const capitalizedForEach=[];
const capitalizedFor=[];

function capitalize(stringa) {
    // il primo char che lo trova su index 0 lo fa maiuscola
    //il resto dell'array lo fa minuscola
    return stringa.charAt(0).toUpperCase() + stringa.slice(1).toLowerCase();
}

//FOREACH METHOD
//chiamiamo la funzione capitalize per ogni elemento del array e si fa push su nuovo array
stringhe.forEach(element => {
    capitalizedForEach.push(capitalize(element));
});

console.log(capitalizedForEach);

//FOR CICLE METHOD
//chiamiamo la funzione capitalize per ogni elemento del array
for (let index = 0; index <   stringhe.length; index++) {
    const element = stringhe[index];
    const capitalizedElement=capitalize(element);
    capitalizedFor.push(capitalizedElement);
}

console.log(capitalizedFor);

//stampiamo le nuove array anche sul lato HTML
document.getElementById("demo1").innerHTML = "<p> Il primo array  delle stringhe è: </p> <u>" + stringhe + "</u>"; 
document.getElementById("demo2").innerHTML = "<p> Il nuovo array creato usando il ciclo FOREACH e la funzione capitalize è: </p> <u>" + capitalizedForEach + "</u>"; 
document.getElementById("demo3").innerHTML = "<p> Il nuovo array creato usando il ciclo FOR e la funzione capitalize è:</p> <u>" + capitalizedFor + "</u>"; 