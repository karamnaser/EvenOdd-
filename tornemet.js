let Player = require('./player');
let Game = require('./game');
let EvenOdd = require('./EvenOdd');
let players = [];
let winer = null;
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
        winer = currentplayer.find(player => players.total_wins == 3);
        console.log(currentplayer[0].total_wins, currentplayer[1].total_wins)
        currentplayer = [];
    }
    console.log(winer)
}

playinguntil3wins();