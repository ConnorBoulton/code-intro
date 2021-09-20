const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

const name = "Connor"

let age = 23

const isCool = true

let car = null

let height;

let x = 4
let y = 10
let z = 7 + 8

let sum = x + y

console.log(height)
console.log(age)
console.log("This is the name variable:", name)

console.log(sum)

let str = 'This is a string '
let strTwo = "This is a second string "
let strThree = `This is my name: ${name}`

let strings = str + strTwo + strThree

console.log(strings)

reader.question("Howdy, what's your name?", function(answer) {
    console.log("Hi " + answer);
  });
  