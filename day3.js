//Array methods

//array is used to store more than one values

let names = ["Vasudha", "Sanju", "Mamta", "Wankhade"]

// print each element

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// 1) map() ==> to perform same operation with each element of array
//      ===> returns array

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // multiply each element of array by 2

let num1Return = num1.map(function(el, index, array) {
    return el * 2
})
console.log(num1Return)

// 2) filter ==> to filter elements in array which satisfy the condition
//        ==> returns array

let num2 = [12, 34, 5, 534, 2, 43456]
    //numbers greater than 100
let num2Return = num2.filter(function(el, index, array) {
    return el > 100
})
console.log(num2Return)

// 3) reduce ==> to add elements
// ==> single value

let num3 = [1, 2, 3, 6, 5, 6, 6, 7, 89, 90]

let num3Return = num3.reduce(function(acc, el, index, array) {
    return acc = acc + el
}, 0)
console.log(num3Return)

// 4) forEach ==> to perform same operation with each element of array
//          ==> returns nothing

let num4 = ["Vasudha", "Wankhade"]
    // write hello before each element and print it

let num4Return = num4.forEach(function(el, index, array) {
    console.log("Hello" + " " + el)
})
console.log(num4Return) // returns nothing

// 5) find ==> to find out the element which satisfy the condition
//      ==> returns first occuring element which satisfy the condition

let num5 = [1, 10, 4, 5, 6, 7, 8, 8]
let num5Return = num5.find(function(el) {
    return el > 5
})
console.log(num5Return)

// 6) some ==> returns true if atleast one elemet satisfy the condition
//      ==> returns boolean value

let num6 = [1, 2, 3, 4, 5]

let num6Return = num6.some(function(el, index, array) {
    return el < 5
})
console.log(num6Return)

// 7) every ==> returns true if all elements satisfy the condition otherwise false
//       ==> returns boolean value

let num7 = [1, 2, 3, 4, 5, 6, 7, 8]

let num7Return = num7.every(function(el) {
    return el < 10
})
console.log(num7Return)

// 9) concat ==> to merge two arrays
//          ==> returns array 

let namesList = ["Vasudha", "Wnakhade"]
let num8 = [1, 2, 3, 4, 5, 6, 7, 8]

let ret = namesList.concat(num8)
console.log(ret)

let ret2 = num8.concat(namesList)
console.log(ret2)

//10) push ==> add element at the end of array ==> returns new length of array
//11) pop  ==> delete last element of array  ==> returns element which is deleted
//12) shift ==> remove first element of array ==> returns elemet which is deleted
//13) unshift ==> add element at the starting of array ==> returns new length of array

let arr = [1, 2, 3, 4, 5, 6]

let pushRet = arr.push(100)
console.log(pushRet)
console.log(arr)

let popRet = arr.pop()
console.log(popRet)
console.log(arr)

let shiftRet = arr.shift()
console.log(shiftRet)
console.log(arr)

let unshiftRet = arr.unshift(100000)
console.log(unshiftRet)
console.log(arr)

//14) includes ==> check if element is present in array or not
//          ==> returns boolean value

let num9 = [1, 2, 3, 4, 5, 6, 78, 9, 9]
let num9Ret = num9.includes(99)
console.log(num9Ret)

//15) indexOf ==> find out index of given element
//         ==> returns index of element if element is not found returns -1

let num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num10Ret = num10.indexOf(9)
console.log(num10Ret)

// 16) slice ==> give array elements in the given range
// returns array

let num11 = [1, 2, 3, 4, 4, 6, 7, 7]
let num11Ret = num11.slice(3, 8)
console.log(num11Ret)

// 17) splice ==> to delete given number of elements from give index number
// ==> returns array of deleted elements

let num12 = [12, 3, 4, 54, 56, 7]
let num12Ret = num12.splice(0, 2)
console.log(num12Ret)
console.log(num12)