let Player = require('./player');
let Game = require('./game');
let EvenOdd = require('./EvenOdd');
let players = [];
let winer = null;
boss = { name: "the boss", score: 0 };
let currentplayer = [];

function creatPlayers(num_of_players = 2) {
    for (let i = 0; i < num_of_players; i++) {
        players.push(new Player())
    }
}

function choosePlayerForRound() {
    currentplayer.push(players[Math.floor((Math.random() * players.length))])
    currentplayer.push(players[Math.floor((Math.random() * players.length))])

}

function playinguntil3wins() {
    while (!winer) {
        creatPlayers(2);
        choosePlayerForRound(players);
        EvenOdd.startingGame(currentplayer)
        winer = currentplayer.find(player => player.total_wins == 3);
        console.log(currentplayer[0].total_wins, currentplayer[1].total_wins)
        currentplayer = [];
    }
    console.log(winer)
}

function playingagainstBoss() {
    Game.totale_games = 5;
    for (let i = 1; i <= Game.totale_games; i++) {
        let num = Game.generateNumber();
        if (num % 2 == 0 && num > 0) {
            Game.increasScore(winer)
            console.log(`Round ${i}, random number is ${num}, ${winer.name} scored!
            `, ` Status : ${winer.name} : ${winer.score} ${boss.name} : ${boss.score}`)
        } else if (num < 0) {
            i--
            continue;
        } else {
            Game.increasScore(players[1])
            console.log(`Round ${i}, random number is ${num}, ${winer.name} scored!
            `, ` Status : ${winer.name} : ${winer.score} ${boss.name} : ${boss.score}`)
        }
    }
    Game.checkWinner([players[0], players[1]]);
}

playinguntil3wins();