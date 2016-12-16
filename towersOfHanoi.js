class HanoiGame {
  constructor() {
    this.towers = [[3,2,1], [], []];
  }

  run(reader, completionCallback) {
    this.promptMove(reader, completionCallback);
  }

  promptMove(reader, completionCallback) {
    this.print();
    reader.question(`Choose a start tower and end tower to move (e.g. 0,2): `, res => {
      let resString = res;
      let resArray = resString.split(",");
      let fromTower = parseInt(resArray[0], 10);
      let toTower = parseInt(resArray[1], 10);
      this.move(fromTower, toTower);
      console.log(this.isWon());
      if (this.isWon()) {
        console.log("You win");
        completionCallback();
      } else {
        this.run(reader, completionCallback);
      }
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];
    return (
      (startTowerIdx >= 0 && startTowerIdx <= 2) &&
      (endTowerIdx >= 0 && endTowerIdx <= 2) &&
       startTower.length > 0 &&
      (endTower.length === 0 || (startTower[startTower.length - 1] < endTower[endTower.length - 1]))
    );
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let startTower = this.towers[startTowerIdx];
      let endTower = this.towers[endTowerIdx];
      endTower.push(startTower.pop());
    } else {
      console.log("BAD MOVE, BRO.");
      this.promptMove();
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    return this.towers[2].length === 3 || this.towers[1].length === 3 ?
    true : false;
  }
}

module.exports = HanoiGame;
