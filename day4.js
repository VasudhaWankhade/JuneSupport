// array methods

// 18) sort ==> to sort out the elements in the array of string in alphabetical order
// returns array

let names = ["Vasudha", "Sanju", "Mamata"]
let aa = names.sort()
console.log(aa)

// 19) flat ==> to merge all sub arrays into one array
// returns merged array

let num = [
    [1, 2, 3],
    [4, 6, 7],
    [9, 4, 6]
]
let bb = num.flat()
console.log(bb)

// 20) fill(element,startIndex,endIndex) ==> to fill the given element in the array in the provided range
//returns updated array

let num1 = [1, 2, 3, 4, 5, 6, 7, 9]
let cc = num1.fill("Hello", 0, 5)
console.log(cc)
console.log(num1)

// 21) splice(startIndex,noOfelementsToBeDeleted,replaceWith) ==> to delete elements from given index
// returns array of elements that are deleted

let num3 = [1, 2, 3, 4, 45, 6, 6, 7, 8, 8]
let dd = num3.splice(3, 4)
console.log(dd)
console.log(num3)