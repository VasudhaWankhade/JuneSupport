let a = Math.floor(22.6) // down 
console.log(a)

let b = Math.ceil(22.1) // round up
console.log(b)

let c = Math.round(22.3)
console.log(c)

let d = Math.random() // 0 to 0.9999 // 1 exclude
console.log(d)

// 0 to 5

let e = Math.random() * 5 // 5 exclude // 0 to 4.99999
console.log(e)

// dice roll  // 1 to 6 // 0.05896895 ==> 1 // 1.638 ==> 2

// let dice = Math.ceil(Math.random() * 6) // 0.5657=> 0 , 1.97940 ==> 1 // 5.9999
let dice = Math.floor(Math.random() * 6) + 1
console.log(dice)


// function ==> to avoid code repeatation

let aa = 100
let bb = 30

// add , sub , mul, div , rem

console.log(aa + bb)
console.log(aa - bb)
console.log(aa / bb)
console.log(aa * bb)
console.log(aa % bb)

function Calculator(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
}

Calculator(100, 30)
Calculator(20, 5)

// function == > 3 ways 

// function declaration
// function expression
// arrow function

function Add(a, b) {
    console.log(a + b)
}

let ss = function() {
    // console.log("Hello")
    return "Hello"

}

let s = ss()
console.log(s)

let ad = (a, b) => {
    return a - b
}
let f = ad(10, 5)
console.log(f)

//  ===


// let div = function(x, y) {
//         return x / y
//     }
//     // console.log(div)
//     // div(12,6)
// let ret = div(50, 5)
// console.log(ret)

// function division(a,b,fn){
//     // let fn = function(x,y){
//     //     return x / y
//     // }

//     let rr = fn(a,b)
//     return rr
// }

// function division(a, b, fn) {
//     div(a, b)
// }









function div(x, y) {
    return x / y
}
let result = div(50, 5)
console.log(result)

//                var,var,fun
function division(a, b, fn) { // a= 100 b=10 fn = div
    let fun = fn(a, b) // div(100,10)
    return fun
}
let ans = division(100, 10, div)
console.log(ans)


// sort

let alpha = [10, 2, 50]
let arr = alpha.sort(function(a, b) { return (a - b) }) // ascending
console.log(arr)

//// pass string as a parameter to function and return string 

// Number + string ==> string
// String + string ==> string
function string(greet) {
    return "Good" + greet
}

let dd = string(2)
console.log(dd)
console.log(typeof dd)

function mul(x,y){
    return x * y
}
let g = mul(12,6)
console.log(g)
console.log(typeof g)