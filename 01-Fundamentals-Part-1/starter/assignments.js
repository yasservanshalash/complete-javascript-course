console.log("linked");

//  =========== Values and Variables ===========

let country = "Syria";
let continent = "Asia";
let population = 17500000;

console.log("country", country);
console.log("continent", continent);
console.log("country", population);



//  =========== Data Types ===========


const isIsland = false;
let language;

console.log("isIsland", isIsland);
console.log("population", population);
console.log("country", country);
console.log("language", language);


//  =========== let const var ===========

language = "Arabic";
console.log("language", language);

//  =========== Basic Operators ===========

let halfOfPopulation = population / 2;
console.log("halfOfPopulation", halfOfPopulation);

let populationPlusOne = population + 1;
console.log("populationPlusOne", populationPlusOne)

if (population > 6000000) {
    console.log(country + " has more people than Finland")
}
else {
    console.log(country + " has less people than Finland")
}

if (population > 33000000) {
    console.log(country + " has more people than average country population")
}
else {
    console.log(country + " has less people than average country population")
}

let description = country + " is in " + continent + ", and it's " + population + " people speak " + language;
console.log(description)


