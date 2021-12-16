let mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
}

let john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
    },
}


mark.calcBMI()
john.calcBMI()

console.log(mark.BMI, john.BMI)

if(mark.BMI > john.BMI){
    console.log(`${mark.firstName}'s BMI (${mark.BMI}) is Higher than ${john.firstName}'s (${john.BMI})`)
} else if(mark.BMI < john.BMI) {
    console.log(`${john.firstName}'s BMI (${john.BMI}) is Higher than ${mark.firstName}'s (${mark.BMI})`)
} else {
    console.log("same BMI")
}