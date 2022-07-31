// variable define ==> two keywords ==> let and const

//let ==> can update value

let a = 10
console.log(a)
a = 20
console.log(a)

// const ==> can not update value

const b = 30
console.log(b)
    // b = 20
    // console.log(b)  ==> will give error

// function ==> why use ?

let c = 10
let d = 5

// add
console.log(c + d)

// multiply
console.log(c * d)

// divide
console.log(c / d)

// substract
console.log(c - d)

let e = 20
let f = 2

// add
console.log(e + f)

// multiply
console.log(e * f)

// divide
console.log(e / f)

// substract
console.log(e - f)

// Ans ==> to avoid repeatation of code

function calculator(a, b) {
    console.log("The addition is equal to :", a + b)
    console.log("The substraction is equal to :", a - b)
    console.log("The multiplication is equal to :", a * b)
    console.log("The division is equal to :", a / b)
}

calculator(50, 10)
calculator(100, 50)

// four types of function

// function without parameter without return type
function noParameters() {
    console.log("Hello")
}
noParameters()

// function with parameter without return type
function withParameters(a, b) {
    console.log(a + b)
}
withParameters(10, 20)
    // function with parameterr with return type
function add(a, b) {
    return a + b
}
let result = add(10, 100)
console.log(result)

// function without parameter without return type

function sub() {
    return "Hello"
}
let result2 = sub()
console.log(result2)

// dataTypes ==> Array Object String ==> Object ==> properties and methods

// Array
//              0           1           2
let names = ["Vasudha", "Wankhade", "Sanju"]

//   property
console.log(names.length)

//for loop

// print each element of array

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// push ==> to add element at the end of array
//==> returns new length of array

let cities = ["Nagpur", "Pune", "Mumbai"]
let aa = cities.push("Amravati")
console.log(cities)
console.log(aa)

// pop ==> to remove element at the end of array
// ==> returns element which is removed

let countries = ["India", "America", "Japan"]
let bb = countries.pop()
console.log(countries)
console.log(bb)

// shift ==> to remove first element of array
// ==> returns element which is removed

let animals = ["Lion", "Tiger", "Goat"]
let cc = animals.shift()
console.log(animals)
console.log(cc)

// unshift ==> add element at the starting of array
// ==> returns new length of array

let calculations = ["addtion", "substraction", "multiplication"]
let dd = calculations.unshift("Division")
console.log(calculations)
console.log(dd)

// map(function(el,index,array)) ==> to perform same operation with each element of array
// ==> returns array

let numbers = [1, 2, 3, 4, 5, 6] // multiply each element by 10
let ee = numbers.map(function(el, index, array) {
    return el * 10
})
console.log(ee)

// filter(function(el,index,array)) ==> to filter out the elements
// ==> returns array 

let numbersOne = [12, 3, 4, 6, 17, 20] // filter elements > 5
let ff = numbersOne.filter(function(el, index, array) {
    return el > 5
})
console.log(ff)

// reduce ==> to reduce array into single value
// returns single value

let num = [1, 2, 3, 4, 5] // addition of all elements
let gg = num.reduce(function(acc, el, index, array) {
    return acc + el
}, 0)
console.log(gg)

// forEach(function(el,index,array)) ==> to perform same operation with each element of array
// ==> returns nothing

let city = ["Amravati", "Nagpur", "Mumbai"]
city.forEach(function(el, index, array) {
    console.log("Welcome to " + el)
})

// find ==> to find out the element satisfying the condition
// return first element in array

let nums = [12, 3, 4, 455, 7, 8, 89]
let hh = nums.find(function(el, index, array) {
    return el < 5
})
console.log(hh)

// findIndex ==> to find index of element satisfying the condition
//              0  1  2  3  4  5  6
let arrOfNum = [1, 2, 3, 4, 5, 6, 7]
let index = arrOfNum.findIndex(function(el, index, array) {
    return el > 5
})
console.log(index)

// every ==> check if each element satisfy the condition
// returns boolean value

let numTwo = [1, 2, 3, 4, 5, 6, 7]
let boolean = numTwo.every(function(el, index, array) {
    return el > 5
})
console.log(boolean)

// some ==> check if atleast one element satisfy the condition
// returns boolean value

let numThree = [1, 2, 3, 4, 5, 6, 7, 8]
let jj = numThree.some(function(el, index, array) {
    return el > 8
})
console.log(jj)

//concat ==> to merge two arrays
// returns merged array

let a1 = [1, 2, 3, 4, 5]
let b1 = ["Vasudha", "Wankhade"]
let z = a1.concat(b1)
console.log(z)
let y = b1.concat(a1)
console.log(y)
console.log(a1)
console.log(b1)

// flat ==> to merge all sub arrays into single array
// returns array

let c1 = [
    [1, 2, 3, 4, 5],
    ["Vasudha", "Wankhade"]
]
let c11 = c1.flat()
console.log(c11)

// join ==> to join all elements of array by provided character
// returns string

let s1 = ["Vasudha", "Wankhade", 1]
let s11 = s1.join('@')
console.log(s11)
console.log(typeof s11)

// fill ==> to fill by specific character in the given range
// reutrn new array

let rr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let r = rr.fill("Vasudha", 3, 7) // do not consider last index
console.log(rr)
console.log(r)

// reverse ==> to reverse array
// return array

let a3 = [1, 2, 3, 4, 5, 6]
let rev = a3.reverse()
console.log(rev)


// slice ==> to get elements in the given range as array
// return array
//         0  1  2  3  4  5  6  7
let b11 = [1, 2, 3, 4, 5, 6, 7, 8]
let slice = b11.slice(0, 4) // do not consider last index
console.log(slice)

// splice ==> to delete elements in array in hte give range
// return deleted elements array
//         0  1  2  3  4  5  6  7
let n11 = [1, 2, 3, 4, 5, 6, 7, 8]
let n1 = n11.splice(2, 3)
console.log(n1)
console.log(n11)

// String ==> stores value by index

let myName = "Vasudha Wankhade"
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i])
}

// toUpperCase ==> convert string to capital letters
//==> return string
let herName = "Vasudha"
let uc = herName.toUpperCase()
console.log(uc)

// toLowerCase ==> convert string to small letters
// ==> return string
let lc = herName.toLowerCase()
console.log(lc)

// includes ==> check if character is present in string or not
//==> return boolean value
let inc = herName.includes('a')
console.log(inc)

// indexOf ==> to find index of charter
// return number
let mother = "Mamata"
let indexStr = mother.indexOf('a')
console.log(typeof indexStr)

// trimStart ==> to remove leading space
// returns string
let trim = " Vasudha "
let tr = trim.trimStart()
console.log(tr)
console.log(trim)

// trimEnd ==> to remove ending space
// returns string
let trim1 = trim.trimEnd()
console.log(trim1)

// trim ==> to remove leading and ending space
let trim2 = trim.trim()
console.log(trim2)

// startsWith ==> check if string starts with given characters
// returns boolean value
let sirName = "Wankhade"
let sw = sirName.startsWith("Wank")
console.log(sw)

// endsWith ==>check if string ends with given characters
// retruns boolean value
let ew = sirName.endsWith('de')
console.log(ew)

// split ==> split string by provided character to convert it in array element
// return array
let father = "Dilip Wankhade"
let ret = father.split(" ")
console.log(ret)

// charAt

let char = "Vasudha"
let r1 = char.charAt(3)
console.log(r1)

// Object ==> to get information more specifically

let myObject = {
    myName: "Vasudha",
    myLastName: "Wankhade"
}