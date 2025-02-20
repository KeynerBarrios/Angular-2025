


export class Person {

    // public name: string;
    // private address: string;


    constructor(
        public Fisrtname: string, 
        public Lastname: string, 
        private address: string = 'No Address'
    ) {}
}

//extends es para heredar
// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public ega: number,
//         public realName: string,
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero{

    // public person: Person;
    
    constructor(
        public alterEgo: string,
        public ega: number,
        public realName: string,
        public person: Person,
    ) {
    }
  
}


const tony = new Person("Tony", "Start", "New York");
const iroman = new Hero("Ironman", 45, "Tony Stark", tony);
console.log(iroman);