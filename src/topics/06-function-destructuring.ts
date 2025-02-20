






export interface Product {
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



// function taxCaculation(options: TaxCalculationOptions): [number, number] {
// function taxCaculation({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCaculation(options: TaxCalculationOptions): [number, number] {

    const {tax, products} = options;
    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });


    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total, taxResult] = taxCaculation({
    products: shoppingCart,
    tax: tax,
});


console.log('Total: ', total);
console.log('Tax: ', taxResult);



export { };