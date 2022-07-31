//            0123456
let myName = "Vasudha"

let a = myName.replace('asu', '')
console.log(a)

let b = myName.substring(2, 6)
console.log(b)
    // console.log(myName)

let array = myName.split('')
array.splice(2, 3)
myName = array.join('')
console.log(myName)