// Object literal

// let vasudha = {
//     myFirstName: "Vasudha",
//     myLastName: "Wankhade",
//     myAge: 22,
//     myRollNo: 25,
//     displayFullName: function() {
//         console.log(this.myFirstName + this.myLastName) // this ==> vasudha
//     }
// }

// let sanju = {
//     myFirstName: "Sanjivani",
//     myLastName: "Dadhe",
//     myAge: 23,
//     myRollNo: 29,
//     displayFullName: function() {
//         console.log(this.myFirstName + this.myLastName)
//     }
// }

// // can not write so many lines to make many objects

// // class ==> template to make object 

// class Person1 {
//     myFirstName = undefined
//     myLastName = undefined
//     myAge = undefined
//     myRollNo = undefined
//     displayFullName = function() {
//         console.log(this.myFirstName + this.myLastName)
//     }
// }

// let vasudha1 = new Person1()
// console.log(vasudha1)

// // setting values of properties outside the classs

// vasudha1.myFirstName = "Vasudha"
// vasudha1.myLastName = "Wankhade"
// vasudha1.myAge = 22
// vasudha1.myRollNo = 25
// vasudha1.displayFullName()
// console.log(vasudha1)

// // desired purpose ==> not obtained

// // constructor ==> to set the values of peoperties at the time of object creation

// class Person {
//     constructor(fN, lN, ag, roll) {
//         this.myFirstName = fN
//         this.myLastName = lN
//         this.myAge = ag
//         this.myRollNo = roll
//     }
//     displayFullName = function() {
//         console.log(this.myFirstName + this.myLastName)
//     }
// }

// let vasudha2 = new Person("Vasudha", "Wankhade", 22, 25)
// console.log(vasudha2)

// let sanju2 = new Person("Sanjivani", "Dadhe", 23, 29)
// console.log(sanju2)

// let harshal = new Person("Harshal", "Wankhade", 21, 30)
// console.log(harshal)

// harshal.language = "Marathi"
// console.log(vasudha2)
// console.log(sanju2)
// console.log(harshal)

// // arrow function 

// let add = (x, y) => console.log(x + y) // short hand ==> can use only when there is only one statement

// let addition = (x, y) => {
//     console.log(x + y)
//     console.log(x - y)
// }
// addition(100, 20)


// // function ==> 3 ways

// // function declaration

// function add(a, b) {
//     console.log(a + B)
// }
// add(a, b)

// // function expression

// let addition1 = function(x, y) {
//     console.log(x + y)
// }
// addition1(10, 20)

// arrow function

let ad = (x, y) => {
    return x + y

}
let result = ad(100, 10)

// let ad = (x, y) => x + y // short hand
// let result = ad(10, 20)
// console.log(result)
