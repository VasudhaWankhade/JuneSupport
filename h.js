// Object literal

let vasudha = {
    myName: "Vasudha",
    myLastName: "Wankhade",
    myRollNo: 25,
    displayFullName: function() {
        console.log(this.myName + this.myLastName)
    }
}

let vasudha1 = {
    myName: "Vasudha1",
    myLastName: "Wankhade1",
    myRollNo: 26,
    displayFullName: function() {
        console.log(this.myName + this.myLastName)
    }
}

// template object create ==> class

class Person {

    myName = undefined
    myLastName = undefined
    myRollNo = undefined
    displayFullName = function() {
        return this.myName + this.myLastName
    }
}
// undefine + undefine ==> NaN

let vasudhaW = new Person()
let fullName = vasudhaW.displayFullName()
console.log(fullName)

// properties ==> values ==> set outside the class

vasudhaW.myName = "Sanjivani"
vasudhaW.myLastName = "Dadhe"
vasudhaW.myRollNo = 30
console.log(vasudhaW)
let fN = vasudhaW.displayFullName()
console.log(fN)

// let v = [1, 2, 3, 4, 5] // array ==> length,sort,map,filter

// constructor ==> purpose ==> to set the values of properties at the time of object creation

class Student {
    constructor(fN, lN, roll) {
        this.myName = fN
        this.myLastName = lN
        this.myRollNo = roll
    }
    displayFullName = function() {
        return this.myName + this.myLastName
    }
}

let sanju = new Student("Sanjivani", "Dadhe", 10)
console.log(sanju)
let f = sanju.displayFullName()
console.log(f)

let vasudha0 = new Student("Vasudha", "Wankhade", 25)
console.log(vasudha0)

// new properties add

vasudha0.language = "Marathi"
console.log(vasudha0)
console.log(sanju)

// memeory location different

// function as parameter to another function

function div(x, y) {
    return x / y
}
let result = div(50, 5)
console.log(result)

//                var,var,fun
// function division(a, b, fn) { // a= 100 b=10 fn = div
//     let fun = fn(a, b) // div(100,10)
//     return fun
// }
// let ans = division(100, 10, div)
// console.log(ans)

function division(a, b, fn) { // a =10 b =5 fn = div
    let aa = fn(a, b) // aa = div(10,5) ==> return 10/5 =2
    return aa
}

let q = division(10, 5, div)
console.log(q)

// function ==> avoid code repeatation

// let
// const
// var



// declaration
// expression
// arrow
//