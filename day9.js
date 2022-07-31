//array


let names = ["Vasudha", "Wankhade", "Dilip"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

// array destructuring

let [fN, lN, mN] = names
console.log(fN)
console.log(lN)
console.log(mN)

let num = [1, 2, 4, 5, 6]
let [a, b, c] = num
console.log(a)
console.log(b)
console.log(c)

// Object 

let info = {
    firstName: "Vasudha",
    lastName: "Wankhade",
    age: 22,
    education: "Graduate"
}

// let { firstName, lastName, education, age } = info
// console.log(firstName)
// console.log(lastName)
// console.log(education)
// console.log(age)

let { firstName: fNN, lastName: lNN, education: ed, age: ag } = info
console.log(fNN)
console.log(lNN)
console.log(ed)
console.log(ag)

let vehicle = {
    color: "red",
    type: "sedane"
}


let aa = vehicle.color
let bb = vehicle.type
console.log(aa)
console.log(bb)

// destructure

let { color: cl, type: ty } = vehicle
console.log(cl, ty)

// array

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let [
    [p, q, r],
    [l, m, n],
    [x, y, z]
] = nums


let info2 = {
    daughter: {
        firstName: "Vasudha",
        lastName: "Wankhade"
    },
    mother: {
        firstName: "Mamata",
        lastName: "Wankhade"
    }
}

let { daughter: { firstName: dfN, lastName: dlN }, mother: { firstName: mfN, lastName: mlN } } = info2

console.log(dlN) // info2.daughter.firstName
console.log(mfN)

// array of Object

let itsMe = [{
        firstName: "Vasudha",
        lastName: "Wankhade"
    },
    {
        mother: "Mamata",
        father: "Dilip"
    }
]

let [{ firstName: first, lastName: last }, { mother: mtr, father: ftr }] = itsMe
console.log(mtr)
console.log(first)

// object

let info3 = {
    games: ["Football", "Cricket"],
    skills: ["Javascript", "Cypress"]
}

let { games: [fG, sG], skills: [fS, sS] } = info3
console.log(sS)

// swapping