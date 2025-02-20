//es para tener un exportacion encapzulada

import { Product,taxCaculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Samsung',
        price: 150.0,
    }
];

//tax = 0.15
const [total, tax] = taxCaculation({
    tax:0.15,
    products: shoppingCart
});


console.log('Total', total);
console.log('Tax', tax);