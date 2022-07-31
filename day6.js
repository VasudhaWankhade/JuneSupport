let array = ["Vasudha", "Wankhade", 22, 50]

let info = {
    myName: "Vasudha",
    myLastName: "Wankhade",
    myAge: 22,
    myRollNo: 50
}

//dot notation
// bracket notation

// print 

console.log(info.myName)
console.log(info['myName'])

// update

//roll no update
info.myRollNo = 100
console.log(info)

info['myRollNo'] = 1000
console.log(info)

// add 

info.myCity = "Nagpur"
console.log(info)

info['myGame'] = "Cricket"
console.log(info)

// {
//     myName: 'Vasudha',
//     myAge: 22,
//     myRollNo: 1000,
//     myCity: 'Nagpur',
//     myGame: 'Cricket'
//   }



// delete

delete info.myLastName
console.log(info)

delete info['myGame']
console.log(info)

// array loop
//          0  1  2  3  4   5  6
let arr1 = [1, 2, 3, 4, 5, 66, 9]

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

let info2 = {
        firstName: "Sanju",
        lastName: "Kolhe",
        age: 22
    }
    // console.log(info2['firstName'])
for (let pro in info2) {
    console.log(info2[pro])
}

let person2 = {
    firstName: "Sanju",
    lastName: "Kolhe",
    age: 22, //   0         1           2
    myGame: ["Cricket", "Football", "Carrom"],
    myParents: {
        mother: "A",
        father: "B"
    }
}

let a = person2.myGame
console.log(a[2])

console.log(person2.myParents.father)

//for loop

for (let key in person2) {
    console.log(person2[key])
}

let arrayOne = [

    {
        names: "Vasudha",
        lastName: "Wankhade"
    },
    {
        names: "Sanju",
        lastName: "Kolhe"
    },
    {
        names: "Sachin",
        lastName: "Tendulkar"
    }


]

// let aa = 22
// let bb = "Sanju"
// console.log(`My name is ${bb} and my age is ${aa}`)

// console.log(arrayOne[0].lastName)

arrayOne.forEach(function(el, index, array) {
    console.log(`${el.names} : ${el.lastName}`)
})

//Vasudha : Wankhade
//Sanju : Kolhe
//Sachin : Tendulkar