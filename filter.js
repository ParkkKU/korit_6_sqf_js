let names = ["김준일", "김준이", "김준삼"];

console.log(names);

names = names.map(name => {return name + "님"});
// ["김준일님", "김준이님", "김준삼님"]
console.log(names);

names = names.filter(name => {return name !== "김준이님"});
console.log(names);

names = names.filter((name, index) => {return index !== 1});
console.log(names);
