function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

class Board {
  constructor() {
    this.grid = createArray(3, 3);
  }

  won() {
    function checkWin(arr) {
      console.log(arr);
      return (arr[0] == "X" || arr[0] == "O") &&
      (arr[0] == arr[1] == arr[2]);
    }

    let columns = this.grid.map((_, c) => this.grid.map(r => r[c]));
    let diag1 = [this.grid[0][0], this.grid[1][1], this.grid[2][2]];
    let diag2 = [this.grid[0][2], this.grid[1][1], this.grid[2][0]];

    return (
      this.grid.some(checkWin) || columns.some(checkWin) ||
      checkWin(diag1) ||checkWin(diag2)
    );
  }

  winner() {

  }

  empty(pos) {

  }

  place_mark(pos, mark) {

  }

  print() {
    console.log(JSON.stringify(this.grid));
  }
}

let board = new Board;
board.grid[0][0] = "X";
board.grid[0][1] = "X";
board.grid[0][2] = "X";
console.log(board.grid[0]);
console.log(board.won());

module.exports = Board;
