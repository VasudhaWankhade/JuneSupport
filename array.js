// find largest number in array

let arr = [12, 3, 4, 5, 6, 7, 67878, 90]

let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }

}
console.log(max)