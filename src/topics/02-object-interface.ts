
const skills: string[] = ['Bash', 'Counter', 'Healing']; //esto es un array

interface Character { //esto es una interfaces
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
};

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};


strider.hometown = 'Rivendell';


console.table(strider);


export {};