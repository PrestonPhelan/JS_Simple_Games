let HanoiGame = require('./towersOfHanoi.js');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function completionCallback() {
  reader.question("Do you want to play again? ", res => {
    res === 'yes' ? runGame() : reader.close();
  });
}

function runGame() {
let game = new HanoiGame;
let newGame = game.run(reader, completionCallback);
}

runGame();
