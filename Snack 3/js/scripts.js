const animali=
{
  animale1 :{ 
    nome: "leone", 
    famiglia: "felidi", 
    classe: "mammiferi" 
  },
  animale2 :{ 
    nome: 'cane', 
    famiglia: 'canidi', 
    classe: 'mammiferi' 
},
  animale3: { 
    nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli'
},
animale4 :{ 
    nome: "gatto", 
    famiglia: "felidi", 
    classe: "mammiferi" 
  },
  animale5 :{ 
    nome: 'cigno', 
    famiglia: 'fasianidi', 
    classe: 'uccelli'
}
}


const mammiferi=[]; // creamo la nuova array mammiferi dove aggiungeremo gli elementi dell' animali che sono mammiferi

for (const x in animali) {
    if (Object.prototype.hasOwnProperty.call(animali, x)) {
        const element = animali[x]; // è elemento di turno che controlliamo per ogni iterazione
        if (element.classe=="mammiferi"){ // se il value legato alla propertie classe è uguale a mammiferi allora 
        console.log(element); //la stampiamo
        mammiferi.push({element:element});//la aggiungiamo alla nuova array mammiferi che abbiamo creato
        }
    }
}
console.log(mammiferi);//stampiamo tutta l'array mammiferi
  
  
  