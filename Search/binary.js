function binarySearch(array, target) {
    let leftIndex = 0
    let rightIndex = array.length - 1

    while (leftIndex <= rightIndex) {
        let midleIndex = Math.floor(leftIndex + rightIndex) / 2
        if (target === array[midleIndex]) return midleIndex
        if (target < array[midleIndex]) {
            rightIndex = midleIndex - 1
        } else {
            leftIndex = midleIndex + 1
        }
    }
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))