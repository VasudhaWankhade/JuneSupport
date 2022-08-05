// let Person2 = function(fN, lN, ag) {
//     this.firstName = fN
//     this.lastName = lN
//     this.age = ag
//         // this.display = function() {
//         //     console.log(this.firstName + this.lastName)
//         // }
// }

// let vasudha1 = new Person2("Vasudha1", "Wankhade1", 22)
// console.log(vasudha1)

// console.log(vasudha1.__proto__ == Person2.prototype)



// class Person {
//     constructor(fN, lN, ag) {
//         this.firstName = fN
//         this.lastName = lN
//         this.age = ag
//     }
//     displayName() { // added in prototype of Person
//         console.log(this.firstName + this.lastName)
//     }
// }

// let vasudha = new Person("Vasudha", "Wankhade", 22)
// console.log(vasudha)
// console.log(vasudha instanceof Person) // instance ==> example of 

// // Inheritance ==> child class can access the parameters, methods and properites of parent class

// class GrandFather {
//     constructor(grandFName, lN) {
//         this.grandFatherName = grandFName
//         this.lastName = lN
//     }
//     displayGrandFatherName() {
//         console.log(this.grandFatherName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     constructor
// }


// Object ==> 4 

// function constructor

// let Person = function(fN, lN, ag) {
//     this.firstName = fN
//     this.lastName = lN
//     this.age = ag
//         // this.displayFullName = function() {
//         //     console.log(this.firstName + this.lastName)
//         // }
// }
// Person.prototype.displayFullName = function() {
//     console.log(this.firstName + this.lastName)
// }


// let vasudha = new Person("Vasudha", "Wankhade", 22)
// console.log(vasudha)
// vasudha.displayFullName()

// let vasudha1 = new Person("Vasudha1", "Wankhade1", 23)
// console.log(vasudha1)
// vasudha1.displayFullName()
//     // object ==> __proto__ property

// console.log(vasudha1.__proto__ == Person.prototype) // true

// // instance ==> example of

// //Person ==> vasudha

// console.log(vasudha instanceof Person) // true
// vasudha.city = "Amravati"
// console.log(vasudha)

// console.log(vasudha.hasOwnProperty('city'))
// console.log(vasudha.hasOwnProperty('firstName'))



let Vehicle = function(color, type, regNo) {
    this.color = color
    this.type = type
    this.regNo = regNo
        // this.displayColor = function(){
        //     console.log(this.color)
        // }

}
let audi = new Vehicle('red', "sedane", 123)
audi.city = "Nagpur"
console.log(audi.hasOwnProperty('city')) // true
console.log(audi.hasOwnProperty('type')) // true


// Inheritance ==> child class has access the parameters, properties and methods of parent class

class GrandFather {
    constructor(grandFN, lN) { //"Deorao", "Wankhade")
        this.grandFatherName = grandFN
        this.lastName = lN
    }
    displayGrandFName() {
        console.log(this.grandFatherName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(fatherName, grandFN, lN) { //"Dilip", "Deorao", "Wankhade")
        super(grandFN, lN)
        this.FatherName = fatherName
    }
    displayFatherName() {
        console.log(this.FatherName + this.lastName)
    }
}

class Son extends Father {
    constructor(sonName, fatherName, grandFN, lN) { //("Vassudha", "Dilip", "Deorao", "Wankhade")
        super(fatherName, grandFN, lN)
        this.sonName = sonName
    }
    displaySonName() {
        console.log(this.sonName + this.lastName)
    }
}


let vasudha2 = new Son("Vassudha", "Dilip", "Deorao", "Wankhade")
console.log(vasudha2)

vasudha2.displaySonName()
vasudha2.displayFatherName()
vasudha2.displayGrandFName()


// --------------------------------


class Student {
    constructor(fN, lN) { //Vasudha,Wankhade
        this.firstName = fN
        this.lastName = lN
    }
}

class Teacher extends Student {
    salary = 10000
}

let vasudha = new Teacher("Vasudha", "Wnakhade")
console.log(vasudha.salary)

function Person3(fN, lN, ag) {
    this.firstName = fN
    this.lastName = lN
    this.age = ag
}
let aa = new Person3("Vasudha", "Wankhade", 22)
console.log(aa)