const cars=
{
  car1 :{ 
    marca: "Fiat", 
    modello: "Panda", 
    alimentazione: "benzina" 
  },
  car2 :{ 
    marca: "Fiat", 
    modello: "500", 
    alimentazione: "benzina" 
  },
  car3 :{ 
    marca: "Audi", 
    modello: "A6", 
    alimentazione: "diesel" 
  },
  car4 :{ 
    marca: "Audi", 
    modello: "S6", 
    alimentazione: "diesel" 
  },
  car5 :{ 
    marca: "Citroën", 
    modello: "C4", 
    alimentazione: "diesel" 
  },
  car6 :{ 
    marca: "Citroën", 
    modello: "Berlingo", 
    alimentazione: "benzina" 
  },
  car7 :{ 
    marca: "Ford", 
    modello: "Fiesta", 
    alimentazione: "metano" 
  },
  car8 :{ 
    marca: "Ford", 
    modello: "mondeo", 
    alimentazione: "gpl" 
  },
  car9 :{ 
    marca: "Hyundai", 
    modello: "tucson", 
    alimentazione: "eletrico" 
  },
  car10 :{ 
    marca: "Hyundai", 
    modello: "i20", 
    alimentazione: "metano" 
  }
}


const carBenzina=[];
const carDiesel=[];
const carOthers=[] ;

for (const x in cars) {
        const element = cars[x]; // è elemento di turno che controlliamo per ogni iterazione
        if (element.alimentazione=="benzina"){ // se il value legato all' allimentazione è benzina
            carBenzina.push({element:element});//la aggiungiamo alla nuova array carBenzina che abbiamo creato
        }else if (element.alimentazione=="diesel") {// se il value legato all' allimentazione è diesel
            carDiesel.push({element:element});//la aggiungiamo alla nuova array carDiesel che abbiamo creato
        } else {
            carOthers.push({element:element}); //tutte le altre macchine le aggiungiamo all'array carOthers
            }
    
}
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