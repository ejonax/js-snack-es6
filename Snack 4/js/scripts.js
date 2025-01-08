const people=
{
  person1 :{ 
    Name: "Ejona1",
    Surname: "Xheka1",
    Age: 15
  },
  person2 :{ 
    Name: "Ejona2",
    Surname: "Xheka2",
    Age: 41
  },
  person3 :{ 
    Name: "Ejona3",
    Surname: "Xheka3",
    Age: 25
  },
  person4 :{ 
    Name: "Ejona4",
    Surname: "Xheka4",
    Age: 74
  },
  person5 :{ 
    Name: "Ejona5",
    Surname: "Xheka5",
    Age: 82
  }
}

/*******SECONDO METODO***********/
const newPeople=[];
for (const x in people) {
        const element = people[x];
        if( element.Age < 18 ) {
           const newElement=element.Name +" " + element.Surname + " non puo guidare perchè ne ha meno di 18 anni";
           console.log(element.Name + " "+ element.Surname + " " +"ne ha " + element.Age +" anni" +" perciò " +newElement);
           newPeople.push(newElement);
        }else if ( element.Age < 75  ) {
           const newElement=element.Name +" " +element.Surname + " puo guidare perchè ne ha più di 18 anni e meno di 75 anni :)";
           console.log(element.Name + " "+ element.Surname + " " +"ne ha " + element.Age +" anni" +" perciò " +newElement);
           newPeople.push(newElement);
        }else {
            const newElement=element.Name +" " +element.Surname + " non puo guidare perchè ne ha più di 75 anni :)";
            console.log(element.Name + " "+ element.Surname + " " +"ne ha " + element.Age +" anni" +" perciò " +newElement);
            newPeople.push(newElement);
        }
}
console.log(newPeople); //stampo su console la nuova array creata

//stampo la nuova array creata su html
let text= " ";
for (let index = 0; index < newPeople.length; index++) {
    const element = newPeople[index];
    text +=  element + "<br>";
}
document.getElementById("demo1").innerHTML = "<p> La nuova array creata con il primo metodoè: </p>" + text;

/*******PRIMO METODO***********/
/* creo una seconda array gli elementi della qualle sono gli stessi del primo array,
 ma per ogni elemento si aggiunge una phrase come nuovo property dell'object person */
const newPeople2=[];
for (const x in people) {
        const element = people[x];
        if( element.Age < 18 ) {
           const newProperty="Non puo guidare perchè ne ha meno di 18 anni!";
           element.phrase=newProperty;
           newPeople2.push({Element:element});
        }else if ( element.Age < 75  ) {
           const newProperty="Puo guidare perchè ne ha più di 18 anni e meno di 75 anni!";
           element.phrase=newProperty;
           newPeople2.push({Element:element});
        }else {
            const newProperty="Non puo guidare perchè ne ha più di 75 anni!";
            element.phrase=newProperty;
            newPeople2.push({Element:element});
        }
}
console.log(newPeople2);

//stampo la nuova array come una lista sulla oagina index
let text2= " ";
for (const i in newPeople2) {
        let singlePerson = newPeople2[i];
        for (const j in singlePerson) {
                const element = singlePerson[j];
                let newElement=element.Name + " "+ element.Surname + " " +"ne ha " + element.Age +" anni" +" perciò: '" + element.phrase + " '";
                console.log(newElement);
                text2 +=  "<li>"+newElement + "</li>";
            }
        }

document.getElementById("demo2").innerHTML = "<p> La nuova array creata con il secondo metodo è: </p> <ul>" + text2 + "</ul>"
