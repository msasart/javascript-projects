const whoWon = require('../RPS.js');

describe("Test who won Rock, Paper, Scissors.", function(){
    test ("If players make the same move, TIE! should be the output", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toBe('TIE!');
    });
    test ("Returns 'Player 2' wins! if p1 = rock and p2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe('Player 2 wins!');
    });
    test ("Returns 'Player 2' wins! if p1 = paper and p2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe('Player 2 wins!');
    });
    test ("Returns 'Player 2' wins! if p1 = scissors and p2 = rock", function(){
        let output = whoWon('scissors','rock');
        expect(output).toBe('Player 2 wins!');
    });
});