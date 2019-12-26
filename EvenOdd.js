let Player = require('./player');
let Game = require('./game');
let player = new Player();
let player2 = new Player();
class EvenOdd {
    constructor() {

    }
    static startingGame(players) {
        Game.totale_games = 5;
        for (let i = 1; i <= Game.totale_games; i++) {
            let num = Game.generateNumber();
            if (num % 2 == 0) {
                Game.increasScore(players[0])
                console.log(`Round ${i}, random number is ${num}, ${players[0].name} scored!
                `, ` Status : ${players[0].name} : ${players[0].score} ${players[1].name} : ${players[1].score}`)
            } else {
                Game.increasScore(players[1])
                console.log(`Round ${i}, random number is ${num}, ${players[1].name} Status : ${players[0].name} : ${players[0].score} ${players[1].name} : ${players[1].score}`)
            }
        }
        Game.checkWinner([players[0], players[1]]);
    }
}

// EvenOdd.startingGame([player, player2])
module.exports = EvenOdd;