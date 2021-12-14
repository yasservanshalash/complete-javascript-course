const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;

function checkWinner(dolphinsAverage, koalasAverage) {
    
    // winner = dolphinsAverage > koalasAverage && ? `dolphins win (${dolphinsAverage} > ${koalasAverage})` : `koalas win (${koalasAverage} > ${dolphinsAverage})`;
    if (dolphinsAverage >= 2* koalasAverage ) {
        console.log(`dolphins win (${dolphinsAverage} > ${koalasAverage})`)
    } else if (koalasAverage >= 2* dolphinsAverage ) {
        console.log(`koalas win (${koalasAverage} > ${dolphinsAverage})`)
    } else {
        console.log("No one wins")
    }
}


let dolphinsAverage = calcAverage(44,23,71);
let koalasAverage = calcAverage(65, 54, 49);

checkWinner(dolphinsAverage, koalasAverage)


dolphinsAverage = calcAverage(85, 54,41);
koalasAverage = calcAverage(23, 34, 27);

checkWinner(dolphinsAverage, koalasAverage)
