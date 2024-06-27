function Soldier(name) {
    // let prototype = {};
    this.name = name
    this.armyName = 'Red Army';
    this.weapon = ['gun', 'riffle', 'bomb'][Math.floor(Math.random() * 3)];
}

Soldier.prototype.info = function () {
    console.log(this.name + ' say hello');
}