//Simple sorting
let bubbleSort = (inputArr) => {
    let len = inputArr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j]
                inputArr[j] = inputArr[j + 1]
                inputArr[j + 1] = tmp
            }
        }
    }
    return inputArr
}
console.log(bubbleSort([8, 3, 1, 2, 4]))