// code your solution here

function isOdd(object) {
    return (object.result === "W");
}

let inp = [
    { year: "2011", result: "S"},
    { year: "2012", result: "W"},
    { year: "2013", result: "T"},
]

let outp = inp.find(isOdd)

console.log(outp)
console.log(outp.year)


const superbowlWin = (records) => {
    let winRecord = records.find( record => record.result === "W" )
    if (winRecord === undefined) {
        return undefined
    } else {
        return winRecord.year
    }
}