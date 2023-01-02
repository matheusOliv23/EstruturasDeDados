// let sum = 0;

// for (let i = 2; i <= 6; i++) {
//     sum = sum + i
// }

// console.log(sum)

// let sum2 = 0;

// for (let i = 0; i < 3; i++) {
//     for (let j = 5; j > 2; j--) {
//         sum2 = sum2 + j + i
//     }
// }

// console.log(sum2)

// let sum3 = 0;
// for (let i = 0; i < 3; i++) {
//     for (let j = 5; j > 2; j--) {
//         sum3 = j + i;
//     }
// }
// console.log(sum3);


// const hobbies = ['Sports', 'Cooking', 'Coding'];
// let favoriteHobby;
// for (const hobby of hobbies) {
//     favoriteHobby = hobby;
// }
// console.log(favoriteHobby);

// let sum4 = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 2; j++) {
//         sum4 = sum4 + i + j;
//         break;
//     }
// }
// console.log(sum4); // ???

// let sum5 = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 2; j++) {
//         sum5 = sum5 + i + j;
//         continue;
//     }
// }
// console.log(sum5); // ???

// let sum6 = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 2; j++) {
//         if (i >= 2) {
//             continue;
//         }
//         sum6 = sum6 + i + j;
//     }
// }
// console.log(sum6); // ???

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total = total + myArr[i]
}

console.log(total)