const people=
[
  { Name: "Ejona1", Surname: "Xheka1", Age: 15 },
  { Name: "Ejona2", Surname: "Xheka2", Age: 41 },
  { Name: "Ejona3", Surname: "Xheka3", Age: 25 },
  { Name: "Ejona4", Surname: "Xheka4", Age: 74 },
  { Name: "Ejona5", Surname: "Xheka5", Age: 82 }
]

let text= " ";
people.forEach(element => {
  if( element.Age < 18 ) {
    const newElement=element.Name +" " + element.Surname + " non puo guidare perchè ne ha meno di 18 anni";
    //aggiungo la nuova frase per le persone sotto i 18
    element.frase=newElement;
    //creo text per stampare la frase che si aggiunge al lato html
    text +=  "<li>"+element.frase + "</li>";
 }else if ( element.Age < 75  ) {
   //aggiungo la nuova frase per le persone sopra i 18 e sotto 75
    element.frase=element.Name +" " +element.Surname + " puo guidare perchè ne ha più di 18 anni e meno di 75 anni :)";
    text +=  "<li>"+element.frase + "</li>";
  }else {
    //aggiungo la nuova frase per le persone sopra i 75
     element.frase=element.Name +" " +element.Surname + " non puo guidare perchè ne ha più di 75 anni :)";
     text +=  "<li>"+element.frase + "</li>";
    }
});

//stampo su console la nuova array creata che avrà anche la frase aggiunta per ogni persona
console.log(people); 

//stampo la nuova frase su index.html come <li> di una <ul>
document.getElementById("demo2").innerHTML = "<p> Le frasi che si sono aggiunte ad ogni persona nell'array iniziale sono: </p> <ul>" + text + "</ul>"
