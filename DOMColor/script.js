// elements get
// querySelectorAll ==> return nodelist
// ulList

let ulList = document.querySelector('ul')
console.log(ulList)

let ulAllLi = document.querySelectorAll('.liInUl')
console.log(ulAllLi)

// olList

let olList = document.querySelector('ol')
console.log(olList)

let olAllLi = document.querySelectorAll('.liInOl')
console.log(olAllLi)

// ul ==> odd == green even == blue

for (let i = 0; i < ulAllLi.length; i++) {
    if (i % 2 == 0) {
        ulAllLi[i].style.color = "green"
    } else {
        ulAllLi[i].style.color = "blue"
    }
}

// ol ==> odd == red even == yellow

for (let i = 0; i < olAllLi.length; i++) {
    if (i % 2 == 0) {
        olAllLi[i].style.color = "red"
    } else {
        olAllLi[i].style.color = "yellow"
    }
}