function sumOfNumbers (process) {
    let result = 0;
    for (var i = 2; i < process.length; i++) {
        result = result + Number(process[i]);
    }
    return result;
}
console.log(sumOfNumbers(process.argv))