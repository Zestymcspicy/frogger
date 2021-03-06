

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();

const allEnemies = [...Array(4)].map((_,i)=> new Enemy(0,Math.floor(Math.random()*3)+1));


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const screenControls = document.getElementsByClassName("arrow");
let controlsArray = [];
for(let i=0; i<screenControls.length; i++){
  controlsArray.push(screenControls[i]);
}
console.log(controlsArray)
controlsArray.forEach(x => {
  x.addEventListener("click", function(e) {
  player.handleInput(e.target.id);
  });
});
