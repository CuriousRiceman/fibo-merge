function iterationFib(number) {
    let sum = 0;
    let fibArray = [];
    for (let i = 0; i < number; i++) {
        if (i < 2) {
            sum += i;
            fibArray.push(sum);
        } else {
            sum = fibArray[i - 2] + fibArray[i - 1]
            fibArray.push(sum);
        }
    }
    return fibArray;
}
console.log(iterationFib(8));

function recursiveFib(number, fibArray = [0, 1]) {
    if (number <= 2) {
        return fibArray;
    } else {
        const fibLength = fibArray.length;
        fibArray.push(fibArray[fibLength - 2] + fibArray[fibLength - 1]);
        return recursiveFib(number - 1, fibArray);
    }
}
console.log(recursiveFib(8));