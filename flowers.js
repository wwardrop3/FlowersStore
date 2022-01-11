const flowers = [
    {
        id: 1,
        color: "Red",
        species: "Red Tulip",
        price: 0.9,
    },
    {
        id: 2,
        color: "White",
        species: "White Rose",
        price: 1.10,
    }

]

const addFlower = (flowerObject) => {
/*
    Write the correct code below to add the value of
    `flowerObject` to the `flowers` array.
*/
    for (flower of flowers) {
        flowers.push(flowerObject)
    }

}  


const findExpensiveFlowers = () => {
const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price > 1.0) {
            expensiveFlowers.push(flower)
        }
    }


/*
    Write a for..of loop that iterate the array
    of flowers, and if the price of a flower is
    greater than or equal to 1.00, it should be
    added to the `expensiveFlowers` array.
*/




return expensiveFlowers  // Do not change this code
}




// **********  Do not touch this code  **********
const getFlowers = () => flowers
    module.exports = {
        findExpensiveFlowers, addFlower, getFlowers
    }
// **********  Do not touch this code  **********