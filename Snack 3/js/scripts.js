const animals=
[
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli'},
  { nome: "gatto", famiglia: "felidi", classe: "mammiferi" },
  { nome: 'cigno', famiglia: 'fasianidi', classe: 'uccelli'},
  { nome: 'balena', famiglia: 'Cetacea', classe: 'mammiferi'}
]

//FOREACH METHOD
//ciclo forearch dove si controlla dentro if se la classe è mammiferi
//creo un nuovo array onlyMammiferi, faccio push ogni elemento che passa il controlllo del if
let onlyMammiferi=[];
animals.forEach(element => {
  if (element.classe==="mammiferi")
  {
    onlyMammiferi.push(element);
  }
}
);
//si stampa la nuova array 
console.log(onlyMammiferi);

//FILTER METHOD
//siccome animals è un array si puo usare il metodo filter
//dentro il filter si controlla se la classe è mammiferi
//si stampa la nuova array 
var mamAnimals=animals.filter(item=>item.classe==="mammiferi");
console.log(mamAnimals);
