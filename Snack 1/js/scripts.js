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

var carBenzina=cars.filter(item=>item.alimentazione==="benzina");
var carDiesel=cars.filter(item=>item.alimentazione==="diesel");
var carOthers=cars.filter(item=>((item.alimentazione!="benzina")&&(item.alimentazione!="diesel")));

console.log(carBenzina);
console.log(carDiesel);
console.log(carOthers);


/* Secondo metodo dove stampo il nome delle macchine su index.html*/
const carBenzina2=[]; 
const carDiesel2=[];
const carOthers2=[] ;

for (const x in cars) {
        const element = cars[x]; 
        let carName="";
        if (element.alimentazione=="benzina"){ 
             carName=element.marca +" " + element.modello;
             carBenzina2.push(carName);//la aggiungiamo alla nuova array delle macchine a benzina
        }else if (element.alimentazione=="diesel") {
              carName=element.marca +" " + element.modello;
              carDiesel2.push(carName);
        } else {
              carName=element.marca +" " + element.modello;
              carOthers2.push(carName);
               }
    }
//stampo le liste degli nuova array su html
document.getElementById("demo1").innerHTML = "<p> La lista delle macchine a benzina è: </p> <u>" + carBenzina2 + "</u>";
document.getElementById("demo2").innerHTML = "<p> La lista delle macchine che usano il diesel è: </p> <u>" + carDiesel2 + "</u>";
document.getElementById("demo3").innerHTML = "<p> La lista delle macchine che non usano ne benzina e ne diesel è: </p> <u>" + carOthers2 + "</u>"; 