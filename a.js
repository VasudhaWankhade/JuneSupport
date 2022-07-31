let arr = [1, 2, 3, 5, 4, 56, 7]

// map ==> to perform same operation with each element of array
//     ==> return array

// multiply each element by 2

// let aa = arr.map(function(el, index, arr) {
//     return el * 2
// })
// console.log(aa)

// forEach ==> to perform same operation with each element of array
// ==> return nothing

// arr.forEach(function(el, index, arr) {
//     console.log(el * 2)
// })

// reduce ==> to get output in single value
//   ==> returns single value

let cc = arr.reduce(function(acc, el, index, arr) {
    return acc = acc + el
}, 0)
console.log(cc)

//acc = 0
//acc = 0 + 1 acc =1
// acc = 1 + 2 acc=3
// acc = 3 + 3 acc = 6
// acc = 6 + 5 acc =11


// every ==> all elements condition satisfy == true otherwise false
//    ==> return boolean

// let num = [1, 2, 4, 3, 5, 6, 7, 8]

// let every = num.every(function(el, index, array) {
//     return el > 5
// })
// console.log(every)

// // some ==> atleast one element satisfy the condition
// // ==> boolean

// let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 10]
// let some = num2.some(function(el, index, array) {
//     return el > 5
// })
// console.log(some)

// // find ==> give first element which satisfy the condition
// // ==> return single value

// let num3 = [1, 2, 3, 4, 5, 7, 7]
// let find = num3.find(function(el, index, array) {
//     return el > 5
// })
// console.log(find)

// // findIndex ==> return index of first element which satify the condition
// //          0  1  2  3  4  5  6  7  8 
// let num4 = [1, 2, 4, 5, 8, 7, 8, 8, 9]
// let index = num4.findIndex(function(el, index, array) {
//     return el > 5
// })
// console.log(index)

// //