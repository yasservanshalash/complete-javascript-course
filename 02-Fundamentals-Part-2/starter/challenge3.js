let mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        BMI = this.mass / this.height ** 2;
        return BMI;
    },
}

let john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        BMI = this.mass / this.height ** 2;
        return BMI;
    },
}

john.BMI = john.calcBMI()
mark.BMI = mark.calcBMI()


console.log(john.BMI)
console(mark.BMI)
// console.log(mark.calcBMI() > john.calcBMI())
// console.log(mark.calcBMI())
// console.log(john.calcBMI())

// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is Higher than ${john.firstName}'s (${john.calcBMI()})`)
// } else if(mark.calcBMI() < john.calcBMI()) {
//     console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is Higher than ${mark.firstName}'s (${mark.calcBMI()})`)
// } else {
//     console.log("same BMI")
// }