
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    detalis: Detailis;
}

interface Detailis {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    detalis: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';

const {song:anotherSong, songDuration: duration, detalis} = audioPlayer;
const {author} = detalis;

//cualquiera de las dos formas es correcta
// const {detalis: {author}} = audioPlayer;
// const {author} = audioPlayer.detalis;


// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [, ,trunks ='Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ', trunks)





export {};