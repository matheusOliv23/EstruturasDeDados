function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

// const fibonacci = (num) => {
//     if (num <= 1) return 1;

//     return fibonacci(num - 1) + fibonacci(num - 2);
// };


console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
console.log(fibonacci(9))