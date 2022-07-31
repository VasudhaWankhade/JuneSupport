let students = [{
        firstName: "chinmay",
        lastName: "deshpande",
        rollNo: 12,
        skills: ["python", "javascript"],
        city: "pune",
        age: 32
    },
    {
        firstName: "poorav",
        lastName: "vyas",
        rollNo: 13,
        skills: ['html', 'css', "jquery"],
        city: "ujjain",
        age: 29
    },
    {
        firstName: "sayli",
        lastName: "deshpande",
        rollNo: 26,
        skills: ['html', 'css', "javascript"],
        city: "nagpur",
        age: 28
    },

    {
        firstName: "harikesh",
        lastName: "prasad",
        rollNo: 34,
        skills: ['excel', 'powerBI', "js"],
        city: "nagpur",
        age: 32
    }

]

// students.el.age

// search people with nagpur city

// filter ,forEach

students.forEach(function(el, index, array) {
    if (el.city == "nagpur") {
        console.log(el.firstName)
    }
})

// [sayali,harikesh]

// filter

let a = students.filter(function(el, index, array) {
    return el.city == "nagpur"
})
console.log(a)
a.forEach(function(el, index, array) {
    console.log(el.firstName)
})


//print name of user with numbers of skills

//chinmay : 2

students.forEach(function(el, index, array) {
    let names = el.firstName
    let skills = el.skills.length
    console.log(`${names} : ${skills}`)
})

////person with city nagpur and skills excel

// && ==> true + true = true otherwise false
// || ==> false + false = false otherwise true

// el.city == "nagpur" && el.skills.includes('excel')

let b = students.filter(function(el, index, array) {
    return el.city == "nagpur" && el.skills.includes('excel')
})
console.log(b)
console.log(b[0].firstName)

// forEach

students.forEach(function(el, index, array) {
    if (el.city == "nagpur" && el.skills.includes('excel')) {
        console.log(el.firstName)
    }
})

//// avergae age of all students

let sumAge = students.reduce(function(acc, el, index, array) {
    return acc = acc + el.age
}, 0)
console.log(sumAge)

let avgAge = sumAge / students.length
console.log(avgAge)