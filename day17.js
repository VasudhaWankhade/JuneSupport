// // Object create methods

// // 1) Object literal

// let amol = {
//     firstName: "Amol",
//     lastName: "Palekar",
//     age: 25
// }

// let vasudha = {
//     firstName: "Vasudha",
//     lastName: "Wankhade",
//     age: 22
// }

// // function constructor

// let Student = function(fN, lN, ag) {
//     this.firstName = fN
//     this.lastName = lN
//     this.age = ag
// }

// let vasudha1 = new Student("Vasudha", "Wankhade", 22)
// console.log(vasudha1)

// // By ES6 class

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
// }
// // Setting values of properites outside the class
// let vasudha3 = new Person()
// vasudha3.firstName = "Vasudha"
// console.log(vasudha3)

// class Person1 {
//     constructor(fN, lN, ag) { //("Vasudha4", "Wankhade4", 23)
//         this.firstName = fN
//         this.lastName = lN
//         this.age = ag
//     }
// }

// let vasudha4 = new Person1("Vasudha4", "Wankhade4", 23)
// console.log(vasudha4)


// // Object.create()

// let sanju = Object.create({})
// sanju.firstName = "Sanjiwani"
// sanju.lastName = "Dadhe"
// console.log(sanju)


// let proto = {
//     init(fn, ln, age, roll) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//         this.roll = roll
//     }
// }

// let sanju1 = Object.create(proto)
// sanju1.init("Sanju", "Dadhe", 24, 30)
// console.log(sanju1)





// Object create


// 1) Object literal

// let vasudha = {
//     firstName: "Vasudha",
//     lastName: "Wankhade",
//     age: 22
// }

// let vasudha2 = {
//     firstName: "Vasudha1",
//     lastName: "Wankhade1",
//     age: 23
// }

// // function construtor

// let Student = function(fN, lN, ag) { //("Vasudha","Wnakhade",22)
//     this.firstName = fN //vasudha3.firstName = "Vasudha"
//     this.lastName = lN
//     this.age = ag
// }

// let vasudha3 = new Student("Vasudha", "Wnakhade", 22)
// console.log(vasudha3)
// vasudha3.city = "Amravati"
// console.log(vasudha3)

// // ES6 class

// class Person {
//     constructor(fN, lN, ag) { //("Sanjivani", "Dadhe", 23)
//         this.firstName = fN // sanju.firstName = "Sanjivani"
//         this.lastName = lN
//         this.age = ag
//     }
// }

// let sanju = new Person("Sanjivani", "Dadhe", 23)
// console.log(sanju)

// let vasudha0 = new Person("Vasudha", "Wankhade", 22)
// console.log(vasudha0)
// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
// }
// // Setting values of properties outside the class
// let sanju1 = new Person()
// sanju1.firstName = "Sanjivani"
// console.log(sanju1)

// // // Object.create() 

// // let v = Object.create({})
// // console.log(v)
// // v.firstName = "Vasudha"
// // console.log(v)

// let proto = {
//     display(fN, lN, ag) { //("Sanju", "Dadhe", 23)
//         this.firstName = fN
//         this.lastName = lN
//         this.age = ag
//     }
// }

// let vv = Object.create(proto)
// console.log(vv)
// vv.display("Vasudha", "Wankhade", 22)
// console.log(vv)

// let ww = Object.create(proto)
// ww.display("Sanju", "Dadhe", 23)
// console.log(ww)


// Object.create()

// let proto = {
//     display(fN, lN, age) {
//         this.firstName = fN //v.firstName =Vasudha
//         this.lastName = lN //
//         this.age = age
//     }
// }


// let v = Object.create(proto)
// console.log(v)

// v.display("Vasudha", "Wankhade", 22)
// console.log(v)

// let s = [1, 2, 3, 45]//array ==> splice ,pop,length


// Object create

// 1) object literal

let a = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    age: 22
}

let b = {
    firstName: "Sanju",
    lastName: "Dadhe",
    age: 23
}
console.log(b.lastName)

// class ==> template to create multiple objects

// 2) function constructor

let Person = function(fN, lN, ag) { // function expression // ("Vasudha", "Wankhade", 22)
    this.firstName = fN // d.firstName ="Vasudha"
    this.lastName = lN
    this.age = ag
}

let d = new Person("Vasudha", "Wankhade", 22)
console.log(d)

// new property add

d.location = "Satara"
console.log(d)

let e = new Person("Rutuja", "Deshmukh", 20)


// 3)By ES6 class 

class Student {
    constructor(fN, lN, ag) { //("Sanjivani", "Dadhe", 23)
        this.firstName = fN //vv.firstName ="Sanjivani"
        this.lastName = lN //vv.lastName = "Dadhe"
        this.age = ag // vv. age =23
    }

}

let vv = new Student("Sanjivani", "Dadhe", 23)
console.log(vv)

let dd = new Student("Rutuja", "Deshmukh", 30)
console.log(dd)

// 4)Object.create()

let proto = {
    display(fN, lN, ag) {
        this.firstName = fN
        this.lastName = lN
        this.age = ag
    }
}

let rr = Object.create(proto)
console.log(rr)

rr.display("Vasudha", "Wnakhade", 22)
console.log(rr)