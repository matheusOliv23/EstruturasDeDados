const arr = [1, 2, 2, 2, 2, 4, 5, 8, 3, 4, 4]

const minValue = Math.min(...arr)
const minArr = arr.filter(el => el === minValue)



console.log(minArr.length)