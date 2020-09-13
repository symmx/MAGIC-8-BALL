let userName = ''

userName ?
    console.log (`Hello, ${userName}!`) :
    console.log ('Hello stranger');

let userQuestion = 'apakah saya akan jadi programmer?'
    console.log(`your question is: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''
console.log(`magic 8-ball says: ${eightBall}`)
if (randomNumber === 0) { 
    console.log("Nanya apaan sih lu");
} else if (randomNumber == 1) {
    console.log("Mana gua tau");
} else if (randomNumber == 2) {
    console.log("Tergantung kalo itumah");
} else if (randomNumber == 3) {
    console.log("Bisa sih, tapi gimana ya...bingung juga gua");
} else if (randomNumber == 4) {
    console.log("Bukannya gabisa jawab cuman pertanyaan lu susah banget");
} else if (randomNumber == 5) {
    console.log("Ya gabakal lah");
} else if (randomNumber == 6) {
    console.log("Kalo diliat liat sih iya");
} else if (randomNumber == 7) {
    console.log("Bisa jadi");
}
