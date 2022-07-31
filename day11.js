// for ==> 
// while ==> 

// for

for (let i = 0; i <= 10; i + 2) {
    console.log(i)
}

let j = 0
while (j < 5) {
    console.log("Hello")
    j++
}

// for

for (let i = 1; i <= 10; i++) {
    console.log(2 * i)
}

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i)
}

// if ==> single input multiple output

// Ticket

//buy 5 ==> 10% diascount
// buy ticket> 5 ==> 20 % discount

let NoOfTickets = 10

if (NoOfTickets == 5) {
    console.log("10% discount")
} else if (NoOfTickets > 5) {
    console.log("20 % discount")
}

let city = "Amravati"

switch (city) {
    case "Pune":
        console.log("Maharashtra")
        break
    case "Amravati":
        console.log("Vidharbha")
        break
    case "Patna":
        console.log("Bihar")
        break
}

// for (let i = 0; i < 5; i++) {
//     if (i == 2) {
//         break
//     }
//     console.log(i)
// }