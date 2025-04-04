
//funcion normal
function addNumbers(a: number, b: number): number {
    return a +b;
};

//funcon de flecha
const addNumberArrow = (a:number, b:number):string => {
    return `${a + b}`;
};

//funcion multiply
function multiply( firstNumber:number, secondNumber?:number, base: number = 2):number {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const results: string = addNumberArrow(1, 2);
// const MultiplyResults: number = multiply(5);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount:number ) => {
    character.hp += amount;
}


const strider: Character =  {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}` )
    }
}

healCharacter(strider, 10);
healCharacter(strider, 50);
strider.showHp();





export {};