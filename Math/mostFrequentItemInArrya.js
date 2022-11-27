/*Complete the function to find the count of the most frequent item of an array. 
  You can assume that input is an array of integers. For an empty array return 0  */

// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5

function mostFrequentItemCount(collection) {
    const counts = {}
    for (let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1
    }

}

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

console.info([...map.keys()])
console.info([...map.values()])
console.info([...map.entries()])