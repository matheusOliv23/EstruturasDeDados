function quickSort() {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            return left.push(arr[i])
        } else {
            return right.push(arr[i])
        }

    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [8, 20, -2, 5, 3]
quickSort(arr)

console.log(arr)