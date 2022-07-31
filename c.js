//Object

let array = ["Vasudha", 23, 24] //roll  no ,age

let object = {
        myName: "Vasudha",
        myAge: 23,
        myRollNo: 24
    }
    // dot notation and bracket notation

//retrive // print
console.log(object.myName) // dot
console.log(object['myName'])

// add

object.myCity = "Amravati"
console.log(object)

object['myEducation'] = "Graduate"
console.log(object)

// {
//     myName: 'Vasudha',
//     myAge: 23,
//     myRollNo: 24,
//     myCity: 'Amravati',
//     myEducation: 'Graduate'
//   }
// delete 
delete object.myEducation
console.log(object)

delete object['myCity']
console.log(object)

// { myName: 'Vasudha', myAge: 23, myRollNo: 24 }

//update

object.myName = "Sanjivani"
console.log(object)

object['myRollNo'] = "50"
console.log(object)