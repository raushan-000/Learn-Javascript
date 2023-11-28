const num = [1, 2, 3]
// usimg function
const total = num.reduce(function (acc, currval) {
    console.log(`acc:${acc} and currval :${currval}`);
    return acc + currval
}, 0)

// using arrow function
const total1 = num.reduce((acc, curr) => acc + curr, 0)
// console.log(total);
// console.log(total1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "C++ course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(priceToPay);