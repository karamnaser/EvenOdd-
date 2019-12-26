class Game {

    constructor() {
        this.totoal_games = 5;
    }
    static generateNumber() {
        return Math.floor(-5 + (Math.random() * 13));
    }

    static increasScore(player) {
        player.score++;
    }

    static checkWinner(players) {
        let maxscore = 0;
        for (let player of players) {
            if (player.score > maxscore) {
                maxscore = player.score
            }
        }
        let winner = players.find(player => player.score == maxscore);
        winner.total_wins++;
        console.log(winner.name + " is the winner")
    }

    get totale_games() {
        return this.totale_games;
    }
    set totale_games(num) {
        this.totale_games = num
    }


}
module.exports = Game;