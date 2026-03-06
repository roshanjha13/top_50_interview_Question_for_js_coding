obj = {
  name: "Roshan",
  age: 25,
  city: "Kolkata"
}

key = "age"

for (let el in obj) {
    if (el === key) {
        delete obj[el]
    }
    
}


console.log(obj);
