function classDecorator<T extends {new (...arg:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New property';
        hello = 'override';
    }
    
}


@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hello World');
    }
}


console.log(SuperClass); // se imprime la defnicion de la clase

const myClass = new SuperClass();
console.log( myClass ); // se imprime la instancia de la clase