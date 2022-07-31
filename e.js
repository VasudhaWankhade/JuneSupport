let array = ['Hello', "Good", "Morning"]
console.log(array[0])
console.log(array[1])
console.log(array[2])

let [a, b, c] = array
console.log(a)
console.log(b)
console.log(c)

let array2 = [{
    firstName: "Vasudha",
    lastName: "Wankhade"
}, {
    mother: "Mamta",
    father: "Dilip"
}]

console.log(array2[0].lastName)

let [{ firstName: fNN, lastName: lN }, { mother: mN, father: fN }] = array2
console.log(lN)
console.log(fN)

let obj = {
    skills: ["Javascript", "Pyhton", "Cypress"],
    games: ["Cricket", "Football", "Hockey"]
}
console.log(obj.games[2])

let { skills: [js, py, cy], games: [cr, fb, hk] } = obj
console.log(hk)

let info2 = {
    daughter: {
        names: {
            nameOne: "Vasudha",
            nameTwo: "Srushti",
            friends: {
                friendOne: "Sanju",
                friendTwo: "Devyani"
            }
        }
    }

    
}

console.log(info2.daughter.names.friends.friendTwo)

let { daughter: { names: { nameOne: nOne, nameTwo: nTwo, friends: { friendOne: fOne, friendTwo: fTwo } } } } = info2
console.log(fTwo)

let y = 10;
let z = 20;
[y, z] = [z, y];
console.log(y)
console.log(z)