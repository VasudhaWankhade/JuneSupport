//
let a = [1, 2, 3, 4, 5, 6]

let aa = new Array(1, 2, 3, 4, 5, 56)
console.log(aa)

// Map and Set

// Set ==> store unique values

let a2 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]
console.log(a2)

let c = new Set([1, 2, 3, 4, 5, 5, 5, 5])
console.log(c)

for (let value of c) {
    console.log(value)
}


// // add()

// let r = c.add(100)
// c.add(200)
// console.log(r)
// console.log(c)

// // size ==> to get number of elements in set

// console.log(c.size)

// // delete

// let b = c.delete(500)
// console.log(b)
// console.log(c)

// // clear()

// let cl = c.clear()
// console.log(cl)
// console.log(c)

// // has() ==> to check if element is present in set or not ==> returns boolean value

// let n = new Set([12, 3, 4, 43, 4, 455, 6])
// let t = n.has(3)
// console.log(t)

// // Map ==> property data type can be any

// let obj = {
//     firstName: "Vasudha",
//     age: 22,
//     34: "Vasudha",
//     true: "above18"
// }
// console.log(obj)
let map = new Map()

// set 

map.set(true, "above18")
console.log(map)

map.set(24, "age")
console.log(map)

for (let val of map) {
    console.log(val)
}


// // get ==> to retrive keys  and values

// let ss = map.get(true)
// console.log(ss)

// // clear()
// map.clear()
// console.log(map)

// // delete

// let d = new Map()
// console.log(d)

// d.set(true, "eligible")
// console.log(d)

// d.delete(true)
// console.log(d)

// // has()

// let x = new Map()
// x.set(24, "age")
// console.log(x)

// let rt = x.has(24)
// console.log(rt)