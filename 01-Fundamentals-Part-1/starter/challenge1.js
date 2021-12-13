// Case 1:


// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// function bmi(mass, height) {
//     return mass / (height ** 2);
// } 

// markBMI = bmi(markMass, markHeight);
// johnBMI = bmi(johnMass, johnHeight);

// markHigherBMI = markBMI > johnBMI

// Case 2:

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.7;

function bmi(mass, height) {
    return mass / (height ** 2);
} 

markBMI = bmi(markMass, markHeight);
johnBMI = bmi(johnMass, johnHeight);

markHigherBMI = markBMI > johnBMI


// Challenge 2:


if(markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}


if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

