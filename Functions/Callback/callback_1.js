function exec(fn, a, b) {
    fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x, y) => console.log(x - y)


exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 100, 20)

const callback = () => console.log('Exec')
setInterval(callback, 1000)