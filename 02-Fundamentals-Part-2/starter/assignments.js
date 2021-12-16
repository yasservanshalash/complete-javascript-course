// Functions


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`
}

let syria = describeCountry("Syria", 17500000, "Damascus");
let lebanon = describeCountry("Lebanon", 4000000, "Beirut");
let finland = describeCountry("Finland", 6000000, "Helsinki");

console.log(syria);
console.log(lebanon);
console.log(finland);

// Function declarations vs expressions

worldPopulation = 7900000000;
function percentageOfWorld1(population) {
    return (population * 100)/7900000000;
}

console.log(`The population of China makes about ${percentageOfWorld1(1441000000)}% of the world's population`);
console.log(`The population of Syria makes about ${percentageOfWorld1(17500000)}% of the world's population`);
console.log(`The population of Finland makes about ${percentageOfWorld1(6000000)}% of the world's population`);

const percentageOfWorld2 = function(population){
    return (population * 100)/7900000000;
}

console.log(`The population of China makes about ${percentageOfWorld2(1441000000)}% of the world's population`);
console.log(`The population of Syria makes about ${percentageOfWorld2(17500000)}% of the world's population`);
console.log(`The population of Finland makes about ${percentageOfWorld2(6000000)}% of the world's population`);

// Arrow functions

const percentageOfWorld3 = (population) => (population * 100)/7900000000;


console.log(`The population of China makes about ${percentageOfWorld3(1441000000)}% of the world's population`);
console.log(`The population of Syria makes about ${percentageOfWorld3(17500000)}% of the world's population`);
console.log(`The population of Finland makes about ${percentageOfWorld3(6000000)}% of the world's population`);


//Functions Calling Other Functions

function percentageOfWorld1(population) {
    return (population * 100)/7900000000;
}

function describePopulation(country, population) {
    return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world's population`;
}

let china = describePopulation("China", 1441000000);
let syria = describePopulation("Syria", 17500000);
let lebanon = describePopulation("Lebanon", 5000000);


console.log(china);
console.log(syria);
console.log(lebanon);

// Introduction to Arrays

function percentageOfWorld1(population) {
    return (population * 100)/7900000000;
}

let populations = [1441000000, 17500000,5000000, 1393409038];

console.log(populations.length === 4);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];


// Basic Array Operations (Methods)

let neighbours = ["Lebanon", "Turkey", "Iraq", "Jordan"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);


let includesGermany = neighbours.includes("Germany");

if (!includesGermany) {
    console.log("Probably not a central European country :D");
}

neighbours[3] = "Republic of Jordan";
console.log(neighbours);

// Introduction to Objects

let myCountry = {
    country: "Syria",
    capital: "Damascus",
    language: "Arabic",
    population: 17500000,
    neighbours: ["Lebanon", "Turkey", "Iraq", "Jordan"]
}


// Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.`)

myCountry.population += 2000000;
console.log(myCountry.population);
myCountry['population'] -= 2000000;
console.log(myCountry.population);


//  Object Methods

myCountry = {
    country: "Syria",
    capital: "Damascus",
    language: "Arabic",
    population: 17500000,
    neighbours: ["Lebanon", "Turkey", "Iraq", "Jordan"],
    describe: function () {
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
        and a capital called ${this.capital}.`)
    },
    checkIsland: function() {
        this.neighbours.length === 0 ? this.isIsland = true : this.isIsland = false;
    },
}

myCountry.describe();
myCountry.checkIsland();


// The for Loop

for(let i = 1; i <= 50; i++){
    console.log(`voter number ${i} is voting`);
}



// Looping Arrays, Breaking and Continuing


let populations = [1441000000, 17500000,5000000, 1393409038];


function percentageOfWorld1(population) {
    return (population * 100)/7900000000;
}

let percentages2 = [];

for(let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages2);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);


// Looping Backwards and Loops in Loops

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
}

//  The while Loop

// let populations = [1441000000, 17500000,5000000, 1393409038];


// function percentageOfWorld1(population) {
//     return (population * 100)/7900000000;
// }

// let percentages3 = [];

// let i = 0
// while(percentages3.length < populations.length){
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++
// }

let populations = [1441000000, 17500000,5000000, 1393409038];

let i = 0
while(percentages3.length < populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++
}