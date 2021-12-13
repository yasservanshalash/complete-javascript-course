// let dolphinsAverage = (96 + 108 + 89) / 3;
// let koalasAverage = (88 + 91 + 110) / 3;

// let dolphinsAverage = (97 + 112 + 101) / 3;
// let koalasAverage = (109 + 95 + 123) / 3;

let dolphinsAverage = (97 + 112 + 101) / 3;
let koalasAverage = (109 + 95 + 106) / 3;





if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins win");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log("Koalas win");
} else if(dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("It's a draw");
} else {
    console.log("no one wins");
}

