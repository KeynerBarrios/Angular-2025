
export interface Passenger {
    name: string;
    children?: string[]
}


const passegenr1: Passenger = {
    name: 'Keyner',
}
const passegenr2: Passenger = {
    name: 'Keyner',
    children: ['Keyner Jr', 'Keyner III']
}


const printChildren = (passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name,howManyChildren);
}


printChildren(passegenr1);