
//En la medida de lo posible no se debe usar any, ya que se pierde el tipado fuerte de TypeScript

export function whatsMyType<T>(argument: T): T {

    return argument;
}

let amIString = whatsMyType<string>('Hello World');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);


console.log('amIString', amIString.split(' '));
console.log('amINumber', amINumber.toFixed());
console.log('amIArray', amIArray.join('-'));