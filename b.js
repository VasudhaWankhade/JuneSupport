// sort ==> to sort out the elements in ascending order
// ==> sorted array

let arr = ["Vasudha", "Sanju", "Wankhade"]
let aa = arr.sort()
console.log(aa)

// let num = [12, 10, 5]
// let bb = num.sort()
// console.log(bb)

// flat ==> merge sub arrays into single array
// returns new array
let arr2 = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"]
]
let cc = arr2.flat()
console.log(cc)

// fill ==> to replace elements in the given range by provided element
// returns new array
//          0  1  2  3  4  5  6
let arr4 = [1, 2, 3, 4, 5, 6, 7]

let dd = arr4.fill("Vasudha", 2, 5)
console.log(dd)

// splice ==> to remove elements in the given range
// return delted elements array
//        0  1  2  3  4  5  6

let num = [1, 2, 3, 4, 5, 6, 7, 8]
let aaa = num.splice(1, 4)
console.log(aaa)
console.log(num)

// join ==> return string

let names = ["Vasudhaa", 1, 3, 4, "Sanju"]
let rr = names.join("-----")
console.log(rr)