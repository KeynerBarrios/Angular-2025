






interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
}
const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



function taxCaculation(options: TaxCalculationOptions): number[]{

    
    let total = 0;
    options.products.forEach( product => {
        const {price} = product;
        total += price;
    });

    return [total, total * options.tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const result = taxCaculation({
    products: shoppingCart,
    tax: tax,
});

const [total, taxResult] = result;

console.log('Total: ', total);
console.log('Tax: ', taxResult);



export {};