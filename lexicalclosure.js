// // // lexical scope ==> area in which item is visible or accessible by other code

// // let myname = "Vasudha" // global 

// function myName() {
//     // var myname = "Wankhade" // local // its lexical scope is myName()'s local environment
//     console.log(myname)
// }

// myName()


// // //sir


// // // function addition() {
// // //     let a = 10
// // //     let b = 20
// // //     console.log(a + b) // 30

// // //     function additionB() {
// // //         let c = 40
// // //         let d = 30
// // //         console.log(a + b) // 30
// // //         console.log(c + d)
// // //             //console.log(e)
// // //         function additionC() {
// // //             let e = 50
// // //             let f = 90
// // //             console.log(a + b + c + d + e + f)

// // //         }
// // //         additionC()
// // //     }
// // //     additionB()

// // // }


// // function addition() {
// //     let a = 10
// //     let b = 20
// //     console.log(a + b) // 30

// //     function additionA() {
// //         let c = 30
// //         console.log(a + b + c)

// //         function additionB() {
// //             let d = 100
// //             console.log(a + b + c + d)
// //         }
// //         additionB()
// //     }

// //     additionA()
// // }

// // addition()


// // // closure

// // // child function can access the parameters of parent function due to closure

// // function greet(x) {
// //     function hi() {
// //         console.log(x)
// //     }
// //     return hi
// // }

// // let h = greet("Good morning")
// // console.log(h)
// // h()

// // // sir

// // function addC() {
// //     let x = 100
// //     let y = 50
// //     return function() {
// //         console.log(x + y)
// //     }
// // }

// // let f = addC()
// // console.log(f);
// // f()

// // SIR

// // lexical scope 
// // {
// // function addition(){
// //     let a = 10
// //     let b = 20 
// //     console.log(a+b) // 30

// //     function additionB(){
// //         let c = 40
// //         let d = 30
// //         console.log(a+b) // 30
// //         console.log(c+d)
// //         //console.log(e)
// //         function additionC(){
// //             let e = 50
// //             let f = 90
// //             console.log(a+b+c+d+e+f)

// //         }
// //         additionC()
// //     }
// //     additionB()

// // }
// // addition()

// // // closures 

// // // function add(x,y){
// // //     console.log(x+y) // 25
// // //     return x + y
// // //     console.log('hello')
// // // }
// // // let t = add(12,13)
// // // console.log(t) // 25

// // function addC(){
// //     let x = 100
// //     let y = 50
// //     return function(){
// //         console.log(x+y)
// //     }
// // }
// // let tt = addC()

// // // let tt = function(){
// // //     console.log(x+y)
// // // }

// // console.log(tt)
// // tt()


// // // let and const  are bloceked scope

// // // program 3

// // // let x = 10
// // // console.log(x)

// // // {
// // //     let y = 40
// // //     console.log👍
// // // }

// // // console.log👍


// // let i = 100 
// // {
// //     i = 300
// //     console.log(i) // 300
// // }
// // console.log(i) // 300


// // let u = 100 
// // {
// //     let u = 700
// //     console.log(u) //700
// // }
// // console.log(u)// 100


// // const o = 900
// // {
// //     let o = 77
// //     console.log(o) // 77
// // }

// // console.log(o) // 900


// // const hh = 100
// // {
// //     const hh = 300
// //     console.log(hh)
// // }
// // console.log(hh) // 100





// // // actual difference between arrow function and normal function


// //     let info = {
// //         firstName:"chinmay",
// //         lastName:"deshpande",
// //         display:function(){
// //             console.log(this.firstName + this.lastName)
// //             let display2 = function(){
// //                 console.log(this.firstName + this.lastName)
// //             }
// //             display2()
// //         }
// //     } 
// //     info.display()


// //}

// // lexical scope 

// function additionA() {
//     let x = 10
//     let y = 20
//     console.log(x + y)
//         //console.log(g)
//     function additionB() {
//         let a = 100
//         let b = 50
//         console.log(x + y)
//         console.log(a + b)
//         console.log(g)

//         function additionC() {
//             // let g = 10
//             console.log(a + b + x + y)
//             console.log(g)
//         }

//         additionC()
//     }

//     additionB()
// }
// //additionA()


// // closure 

// function additionE(x, y) {
//     return x + y
//     console.log('hello')

// }
// let a = additionE(12, 13)
// console.log(a)

// function additionF() {
//     let x = 100
//     let y = 30
//     return function() {
//         console.log(x + y)
//     }
// }

// let r = additionF()
// console.log(r)
//     // let r = function(){
//     //     console.log(x+y)
//     // }

// r()

// // actual difference between expression and arrow function

// // var firstName = "ram"
// // var lastName = "dani"


// // let info = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     display:function(){
// //         console.log(this) // this ===> info
// //         console.log(this.firstName + this.lastName)
// //         let display2 = function(){
// //             // this ===> window
// //             console.log(this.firstName + this.lastName)
// //         }
// //         display2()
// //     }
// // }
// // info.display()




// // var firstName = "ram"
// // var lastName = "dani"


// // let info = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     display:function(){
// //         console.log(this) // this ===> info
// //         console.log(this.firstName + this.lastName)//
// //         let display2 = ()=>{
// //             // this ===> info
// //             console.log(this.firstName + this.lastName) //
// //         }
// //         display2()
// //     }
// // }
// // info.display()


// // info  ==> this ===> window
// // let info = {
// //     firstName: "chinmay",
// //     lastName: "deshpande",
// //     display: () => {
// //         console.log(this) // this ===> window
// //         console.log(this.firstName + this.lastName)//
// //         let display2 = () => {
// //             // this ===> window
// //             console.log(this.firstName + this.lastName) //
// //         }
// //         display2()
// //     }
// // }
// // info.display()

// // why not let
// // var x = 10
// // console.log(window.x)


// // Lexical scope ==> area in which item is visible or accessible by other code
// // child function can access the parameters and methods of parent function

// function addition() {
//     let a = 10
//     let b = 20

//     function additionA() {
//         console.log(a + b)
//         let c = 30
//         console.log(c)

//         function additionB() {

//         }
//     }
//     additionA()
// }
// addition()
// var myname = "Wankhade" // global

// function myName() {
//     console.log(myname)
// }
// myName()


// // closures

// function additionD(x, y) {
//     return function() {
//         console.log(x + y)
//     }
// }

// let ret = additionD(10, 20)
// console.log(ret)
// ret()

// // function expression and arrow function
// // var firstName = "Sanju"
// // var lastName = "Dadhe"
// // let obj = {
// //     firstName: "Vasudha",
// //     lastName: "Wankhade",
// //     display: function() {
// //         console.log(this.firstName + this.lastName)
// //         display2 = () => { // expresssion ==> scope window // arrow ==> scope local==> this == obj 
// //             console.log(this.firstName + this.lastName)
// //         }
// //         display2()
// //     }
// // }
// // obj.display()




// // let myInfo = {
// //     firstName: "Vasudha",
// //     lastName: "Wankhade",
// //     display: function() {
// //         console.log(this.firstName + this.lastName)
// //         display2 = function() {
// //             console.log(this.firstName + this.lastName) // this = window
// //         }
// //         display2()
// //     }
// // }
// // myInfo.display()


let myInfo = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    display: () => {
        console.log(this.firstName + this.lastName)
        display2 = function() {
            console.log(this.firstName + this.lastName) // this = parent this
        }
        display2()
    }
}
myInfo.display()

// lexical scope
// function sub() {
//     let a = 10
//     let b = 30
//     console.log(a + b)

//     function sub2() {
//         let c = 100
//         console.log(a + b + c)
//     }
//     sub2()
// }
// sub()

// closure

// function add() {
//     let x = 10
//     let y = 20
//     return function() {
//         console.log(x + y)
//     }
// }
// let a = add(100, 10)
// console.log(a)
// a()