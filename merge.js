// Using one function.
function mergeSort(array) {
    const arrayLength = array.length;
    if (arrayLength <= 1) {
        return array;
    } else {
        // If you prefer splitting odd arrays UNEVELY (such as an array of length 5 into 4 and 1), use the below
        // let firstHalf;
        // let secondHalf;
        // if (arrayLength % 2 === 0) {
        //     const arrayMidPoint = arrayLength / 2;
        //     firstHalf = array.slice(0, arrayMidPoint);
        //     secondHalf = array.slice(arrayMidPoint);
        // } else {
        //     firstHalf = array.slice(0, arrayLength - 1);
        //     secondHalf = array.slice(arrayLength - 1);
        // }
        
        // If you prefer splitting odd arrays as EVENLY as possible (array length of 5 will be split into 3 and 2), use the below
        const arrayMidPoint = Math.round(arrayLength / 2);
        let firstHalf = array.slice(0, arrayMidPoint);
        let secondHalf = array.slice(arrayMidPoint);

        let firstHalfDivide = mergeSort(firstHalf);
        let secondHalfDivide = mergeSort(secondHalf);
        console.log(firstHalfDivide);
        console.log(secondHalfDivide);

        // In the case where it returns an array of 1, its sorted by default
        // So we need to check which element is greater and then return that
        if (firstHalfDivide.length === 1 && secondHalfDivide.length === 1) {
            if (firstHalfDivide[0] > secondHalfDivide[0]) {
                return [secondHalfDivide[0], firstHalfDivide[0]];
            } else {
                return [firstHalfDivide[0], secondHalfDivide[0]];
            }
        } else { // Otherwise, we compared each value in one array to the other, and alternate
            let firstHalfIteration = 0;
            let secondHalfIteration = 0;
            let finishedOrNot = false;
            let sortedArray = [];
            while (!finishedOrNot) {
                if (firstHalfDivide[firstHalfIteration] === undefined) {
                    finishedOrNot = true;
                    if (secondHalfIteration < secondHalfDivide.length) {
                        for (secondHalfIteration; secondHalfIteration < secondHalfDivide.length; secondHalfIteration++) {
                            sortedArray.push(secondHalfDivide[secondHalfIteration]);
                        }
                    }
                    return sortedArray;
                } else if (secondHalfDivide[secondHalfIteration] === undefined) {
                    finishedOrNot = true;
                    if (firstHalfIteration < firstHalfDivide.length) {
                        for (firstHalfIteration; firstHalfIteration < firstHalfDivide.length; firstHalfIteration++) {
                            sortedArray.push(firstHalfDivide[firstHalfIteration]);
                        }
                    }
                    return sortedArray;
                }
                if (firstHalfDivide[firstHalfIteration] > secondHalfDivide[secondHalfIteration]) {
                    sortedArray.push(secondHalfDivide[secondHalfIteration]);
                    secondHalfIteration++;
                } else {
                    sortedArray.push(firstHalfDivide[firstHalfIteration]);
                    firstHalfIteration++;
                }
            }
            return sortedArray;
        }
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([105, 79, 100, 110]));
