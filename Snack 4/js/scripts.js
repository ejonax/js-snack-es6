const people=
{
  person1 :{ 
    Name: "Ejona1",
    Surname: "Xheka1",
    Age: 15,
  },
  person2 :{ 
    Name: "Ejona2",
    Surname: "Xheka2",
    Age: 41,
  },
  person3 :{ 
    Name: "Ejona3",
    Surname: "Xheka3",
    Age: 25,
  },
  person4 :{ 
    Name: "Ejona4",
    Surname: "Xheka4",
    Age: 65,
  },
  person5 :{ 
    Name: "Ejona5",
    Surname: "Xheka5",
    Age: 82,
  }
}

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
document.getElementById("demo1").innerHTML = "<p> La nuova array creata è: </p>" + text;

