// Given a string, return a new string with the
// reversed order of characters

function reverse(string) {
  return string.split("").reverse().join("");
}

function reverse2(string) {
  let reversed = "";
  for (let character of string) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse3(string) {}

console.log(reverse("abcd"));
console.log(reverse2("abcd"));
