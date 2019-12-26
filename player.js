readlinesync = require('readline-sync');
class Player {
    constructor() {
        this.name = readlinesync.question('May I have your name?');
        this.score = 0;
        this.total_wins = 0;
    }
}
module.exports = Player;