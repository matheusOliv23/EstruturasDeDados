const numbers = [1, 2, 3, 4, 5, 8, 22, 55, 100]

//1

const numGreater5 = numbers.filter(num => num > 5)

console.log(numGreater5)

const mappedNumbers = numbers.map(val => ({ num: val }))
console.log(mappedNumbers)

const multiplication = numbers.reduce((acc, value) => {
    return acc * value
}, 1)
console.log(multiplication)

//2

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num
        }
    }
    return curMax
}

console.log(findMax(...numbers))

// 3

function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0]
    for (const num of nums) {
        if (num > curMax) {
            curMax = num
        }
        if (num < curMin) {
            curMin = num
        }
    }
    return [curMax, curMin]
}

const [min, max] = findMinMax(...numbers)
console.log(min, max)

//4

const userIds = new Set()
userIds.add(10)