/* let now = new Date();
now.getFullYear(); 
console.log(now); */

// object fabric
// function user (a, b){
//     let u = {};
//     u.group = "Student"
//     u.name = a;
//     u.lastName = b;
//     u.info = function(){
//         console.log(this.group);
//     }
//     return u;
// }

// let u1 = user("Danilo", "Vesovic");
// // let u2 = user("Ljubica", "Miric");
// // console.log(u1);
// // console.log(u2);
// u1.info();
// console.log(u1 instanceof user);


// syntax for oop
// function User(a, b){
//     // let this = {}
//     this.name = a;
//     this.lastName = b;
//     // return this
// }
//
// let u1 = new User("Danilo", "Vesovic");
// let u2 = new User("Ivan", "Vesovic");
// console.log(u1);
// console.log(u2);
// console.log(u1 instanceof User);

// exercise
// function Soldier(name){
//     // let prototype = {};
//     this.name = name
//     this.armyName = 'Red Army';
//     this.weapon = ['gun', 'riffle', 'bomb'][Math.floor(Math.random()*3)];
// }

// Soldier.prototype.info = function(){
//     console.log(this.name  + ' say hello');
// }

// let s1 = new Soldier('Danilo');
// s1.info();

let container = document.querySelector('.container');
let army = [];

createArmy(5000);
function createArmy(numOfSoldiers){
    for (let i = 0; i < numOfSoldiers; i++) {
        army.push(new Soldier('Soldier ' + i));
    }
}

// console.log(army[1000]);
// army[1000].info();

displaySoldiers();

function displaySoldiers(){
    army.forEach((soldier,index) =>{
        let newDiv = document.createElement('div');
        newDiv.id = index;
        newDiv.classList.add('soldier');

        if(soldier.weapon ==='bomb'){
            newDiv.classList.add('bomber');
        } else if(soldier.weapon === 'riffle'){
            newDiv.classList.add('riffler')
        } else {
            newDiv.classList.add('gooner')
        }
        newDiv.addEventListener('click', showInfo)
        container.appendChild(newDiv);

    })
}

function showInfo(e){
    let currnetSolder = army[this.id]
    alert(`${currnetSolder.name} ${currnetSolder.weapon}`)
}