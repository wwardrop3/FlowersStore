const { addFlower, findExpensiveFlowers, getFlowers } = require("./flowers.js")

addFlower({
    id: 3,
    color: "Orange",
    species: "Tulip",
    price: 0.95
})

addFlower({
    id: 4,
    color: "White",
    species: "Baby Breath",
    price: 0.40
})

addFlower({
    id: 5,
    color: "Blue",
    species: "Orchid",
    price: 1.05
})

const expensiveFlowers = findExpensiveFlowers()

console.log(`







Automated Test: Adding three new flowers added to your array.
Price #1 is 0.95
Price #2 is 0.40
Price #3 is 1.05
`)

console.log(getFlowers())

console.log(`



Automated Test: Verifying that there are only two expensive flowers.
`)

if (expensiveFlowers.length !== 2 || Array.isArray(expensiveFlowers[0])) {
    console.log(`
*************************
****   TEST FAILED   ****
*************************

The test code expected that two flowers should be
in the expensiveFlowers array, and that each item
in the array is an object.

Make sure that you have an \`if\` condition that
is checking the price property of each flower, and
that only flowers whose price is >= 1.00 are being
added.
`)
} else {
    console.log(`
****************************
****   TEST SUCCEEDED   ****
****************************

Congratulations on writing valid code for your first
self-assessment project.
`)
}

console.log(expensiveFlowers)


