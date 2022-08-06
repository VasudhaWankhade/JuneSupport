// // class design ==>
// // Inheritance
// // Polymorphism
// // Encapsulation
// // Abstraction

// // Inheritance

// // Parent class with constructor and child class without constructor

// // class GrandFather {
// //     constructor(grandFn, lastName) {
// //         this.grandFatherName = grandFn
// //         this.lastName = lastName
// //     }
// //     displayName() {
// //         console.log(`${this.grandFatherName} ${this.lastName}`)
// //     }
// // }

// // class Father extends GrandFather {
// //     fatherName = "Dilip"
// // }


// // Father object

// // let dilip = new Father("Deorao", "Wankhade")

// // // Properties and methods accessible to dilip

// // console.log(dilip.grandFatherName)
// // console.log(dilip.lastName)
// // console.log(dilip.fatherName)
// // dilip.displayName()

// // Parent and child class both with constructor

// class GrandFather { // parent class
//     constructor(grandFn, lastName) {
//         this.grandFatherName = grandFn
//         this.lastName = lastName
//     }
//     displayGrandName() {
//         console.log(`${this.grandFatherName} ${this.lastName}`)
//     }
// }

// class Father extends GrandFather { // child class
//     constructor(grandFn, lastName, fatherName) {
//         super(grandFn, lastName) // to call parent constrctor
//         this.fatherName = fatherName
//     }
//     displayFatherName() {
//         console.log(`${this.fatherName} ${this.lastName}`)
//     }
// }

// let dilip1 = new Father("Deorao", "Wankhade", "Dilip")

// // Properties and methods accessible to dilip1

// console.log(dilip1.grandFatherName)
// console.log(dilip1.lastName)
// console.log(dilip1.fatherName)
// dilip1.displayFatherName()
// dilip1.displayGrandName()

// // Single parent two childs

// class WorldBank {
//     constructor(si, li) {
//         this.savingInterest = si
//         this.loanInterest = li
//     }
//     saving() {
//         console.log(`The saving interest of world bank is ${this.savingInterest}`)
//     }
//     loan() {
//         console.log(`The loan interest of world bank is ${this.loanInterest}`)
//     }
// }

// class SBI extends WorldBank {
//     saving() {
//         console.log(`This is SBI saving method`)
//     }
//     loan() {
//         console.log(`This is SBI loan method`)
//     }
// }

// class BOI extends WorldBank {
//     savingBOI() {
//         console.log(`This is BOI saving method`)
//     }
//     loanBOI() {
//         console.log(`This is BOI loan method`)
//     }
// }

// let boi = new BOI(1, 4)
//     // properties and methods accessible to boi

// console.log(boi.savingInterest)
// console.log(boi.loanInterest)
// boi.savingBOI()
// boi.loanBOI()
// boi.saving()
// boi.loan()

// // Polymorphism ==> one thing many forms

// // amazon ==> search method
// // search ==> signature ==> iphone 
// // search ==> signature ==> iphone 6
// // search ==> signature ==> iphone 6 s

// // same class same method different signature ==> over loading
// // This is not possible in javascript

// // function overloading example ==> manage

// class Addition {
//     additon(a, b, c) {
//         if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         } else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         } else {
//             console.log("Operation can not be performed")
//         }
//     }
// }

// let add = new Addition(1, 2, 3)
// add.additon(1, 2, 4)
// add.additon(1, 2)
// add.additon(1)

// // In above example ==> same class(Addition) same method(addition) and different signature(parameters) ==> overloading



// Polymorphism ==> one thing having many forms

// Amazon ==> search
// iphone ==> search 
// search(iphone)
// search(iphone ,6)

// same class same method different signature ==> overloading
// overloading is not possible in js


// class Addition {
//     add(a, b, c) {
//         if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         } else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         } else {
//             console.log("Incorrect input")
//         }

//     }
// }

// let a = new Addition()
// a.add(1)
// a.add(1, 2)
// a.add(1, 2, 3)

// Vehicle 

// let Vehicle = function(color, type, regNo) {
//         this.color = color
//         this.type = type
//         this.regNo = regNo
//             // this.displayColor = function() {
//     console.log(this.color)
// }

// }
// Vehicle.prototype.displayColor = function() {
//     console.log(this.color)
// }
// let audi = new Vehicle("Red", "sedane", 101) // object prototype === parent prototype
// let bmw = new Vehicle('black', "SUV", 567)
// console.log(Vehicle.prototype == audi.__proto__)
// audi.city = "Amravati"
// console.log(audi)
// console.log(bmw)
// audi.displayColor()

// instance of ==> example of

// console.log(audi instanceof Vehicle)

// // hasOwnproperty ==> is there any property present in the object ==> mentioned 

// console.log(audi.hasOwnProperty('city'))
// console.log(audi.hasOwnProperty('version'))


// Object.create()

// let aa = {
//         display(a, b, c) {
//             this.myName = a
//             this.lastName = b
//             this.age = c
//         }
//     }
//     // aa.prototype.city = "Amravati"
// let vasudha = Object.create(aa)
// console.log(vasudha)
// vasudha.display("Vasudha", "Wankhade", 22)
// console.log(vasudha)
// console.log(vasudha.city)


let Person = function(fN, lN, ag) {
    this.firstName = fN
    this.lastName = lN
    this.age = ag
        // this.displayName = function() {
        //     console.log(`${this.firstName} ${this.lastName}`)
        // }
}

Person.prototype.city = "Amravati"
Person.prototype.displayName = function() {
    console.log(`${this.firstName} ${this.lastName}`)
}


let vasudha = new Person("Vasudha", "Wankhade", 22) // vasudha prototype === Person prototype
console.log(vasudha)
console.log(vasudha.city)
vasudha.displayName()

let sanju = new Person("Sanjivani", "Dadhe", 23)
console.log(sanju)
console.log(sanju.city)
console.log(Person.prototype === vasudha.__proto__)
sanju.displayName()

// instance of ==> example of

console.log(sanju instanceof Person)

// hasOwnProperty  
// true ==> class proprerties , object separately properties and value set
sanju.color = "Pink"

console.log(sanju.hasOwnProperty('city'))
console.log(sanju.hasOwnProperty('firstName'))
console.log(sanju.hasOwnProperty('color'))

// World bank ==> SBI BOI

class WorldBank {
    constructor(savingI, loanI) {
        this.saving = savingI
        this.loan = loanI
    }
    savingW() {
        console.log(`The saving interest for World Bank is ${this.saving}`)
    }
    loanW() {
        console.log(`The loan interest for World Bank is ${this.loan}`)
    }
}

class BOI extends WorldBank {
    savingBOI() {
        console.log("This is BOI saving method")
    }
    loanBOI() {
        console.log("This is BOI loan method")
    }
}

class SBI extends WorldBank {
    savingSBI() {
        console.log("This is SBI saving method")
    }
    loanSBI() {
        console.log("This is SBI loan method")
    }
}


//BOI 

let boi = new BOI(4, 3)

// properties and methods accessible to BOI object

console.log(boi.saving)
console.log(boi.loan)
boi.savingW()
boi.loanW()

boi.savingBOI()
boi.loanBOI()

// SBI 

let sbi = new SBI(5, 1)

console.log(sbi.saving)
console.log(sbi.loan)
sbi.savingW()
sbi.loanW()

sbi.savingSBI()
sbi.loanSBI()