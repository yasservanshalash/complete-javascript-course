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



//  =========== Strings and Template Literals ===========

description = `${country} is in ${continent}, and it's ${population} people speak ${language}`
console.log(description)


//  =========== Taking Decisions: if / else Statements ===========



if (population > 33000000) {
    console.log(country + "'s population is above average")
} else {
    console.log(`${country}'s population is ${33000000 - population} below average`)
}

if (13000000 > 33000000) {
    console.log(country + "'s population is above average")
} else {
    console.log(`${country}'s population is ${33000000 - 13000000} below average`)
}

if (130000000 > 33000000) {
    console.log(country + "'s population is above average")
} else {
    console.log(`${country}'s population is ${33000000 - 130000000} below average`)
}



//  =========== Type Conversion and Coercion ===========

'9' - '5';  // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; //1143


//  ===========  Equality Operators: == vs. === ===========




let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) {
    console.log("Only 1 border!");
} else if(numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}



//  ===========  Logical Operators ===========


let country = "Syria";
let population = 17500000;
const isIsland = false;
let language = "Arabic";


if((population < 50000000) && (language === "English") && !isIsland) {
    console.log(`${country} is a good choice for Sarah`)
} else {
    console.log(`${country} is not a good choice for Sarah`)
}



//  =========== The switch Statement ===========


let language = "English";

switch(language) {
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Indian":
        console.log("4th");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default: console.log("Great language too! :D")
}


//  =========== The Conditional (Ternary) Operator ===========

let country = "Syria";
let population = 13000000;
let countryPopulation = population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(countryPopulation);