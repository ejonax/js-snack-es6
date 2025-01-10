const cars=
[
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Fiat", modello: "500", alimentazione: "benzina" },
  { marca: "Audi", modello: "A6", alimentazione: "diesel" },
  { marca: "Audi", modello: "S6", alimentazione: "diesel" },
  { marca: "Citroën", modello: "C4", alimentazione: "diesel" },
  { marca: "Citroën", modello: "Berlingo", alimentazione: "benzina" },
  { marca: "Ford", modello: "Fiesta", alimentazione: "metano" },
  { marca: "Ford", modello: "mondeo", alimentazione: "gpl" },
  { marca: "Hyundai", modello: "tucson", alimentazione: "eletrico" },
  { marca: "Hyundai", modello: "i20", alimentazione: "metano" }
]

// FILTER METHOD siccome cars lo abbiamo definito come array
var carBenzina=cars.filter(item=>item.alimentazione==="benzina");
var carDiesel=cars.filter(item=>item.alimentazione==="diesel");
var carOthers=cars.filter(item=>((item.alimentazione!="benzina")&&(item.alimentazione!="diesel")));

console.log(carBenzina);
console.log(carDiesel);
console.log(carOthers);

//FOREACH METHOD
/* Secondo metodo dove stampo solo il nome delle macchine su index.html*/
const carBenzina2=[]; 
const carDiesel2=[];
const carOthers2=[] ;

 cars.forEach(element => {
  if (element.alimentazione=="benzina"){ 
       carBenzina2.push(element.marca +" " + element.modello);
  }else if (element.alimentazione=="diesel") {
        carDiesel2.push(element.marca +" " + element.modello);
  } else {
        carOthers2.push(element.marca +" " + element.modello);
         }
 });

//stampo le liste degli nuova array su html
document.getElementById("demo1").innerHTML = "<p> La lista delle macchine a benzina è: </p> <u>" + carBenzina2 + "</u>";
document.getElementById("demo2").innerHTML = "<p> La lista delle macchine che usano il diesel è: </p> <u>" + carDiesel2 + "</u>";
document.getElementById("demo3").innerHTML = "<p> La lista delle macchine che non usano ne benzina e ne diesel è: </p> <u>" + carOthers2 + "</u>"; 