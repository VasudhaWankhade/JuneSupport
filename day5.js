let array = ["Vasudha", 12, 22]
    //value are not specified
    // so there is another data type called as object

let object = {
    myName: "Vasudha",
    myRollNo: 12,
    myAge: 22
}

//Object ==> dot and bracket notation

//retrive
console.log(object.myName)
console.log(object['myName'])
console.log(object)

//update
object.myRollNo = 25
object['myAge'] = 23
console.log(object)

//add 
object.myCity = "Mumbai"
object.myEducation = "Graduate"
console.log(object)

//delete
delete object.myCity
delete object.myEducation
console.log(object)