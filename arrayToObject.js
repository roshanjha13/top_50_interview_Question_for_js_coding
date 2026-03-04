let arr = [
  ["name", "Roshan"],
  ["age", 25],
  ["city", "Pune"]
]

let obj  = {};
for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1]
}

console.log(obj);
