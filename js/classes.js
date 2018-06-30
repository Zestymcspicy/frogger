class Entity {
  constructor() {
    this.sprite = 'images/'
    this.x = 2;
    this.y = 5;
    this.movementEnabled  = true;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

class Player extends Entity {
  constructor () {
    super();
    this.sprite += 'char-boy.png';
  }
    handleInput(dir) {
      if (this.movementEnabled === true){
        switch(dir) {
          case 'up':
            if (this.y>0) {
              this.y--;
            }break;
          case 'down':
            if (this.y<5) {
              this.y++;
            }break;
          case 'left':
            if (this.x>0) {
              this.x--;
            }break;
          case 'right':
            if (this.x<4) {
              this.x++;
            }break;
        }
      }
    };
    resetChar() {
      this.sprite = 'images/char-boy.png'
      this.x=2;
      this.y=5;
    };
    checkCollisions(dt) {
      for (let enemy of allEnemies){
        if (Math.floor(enemy.x)===player.x && enemy.y===player.y){
          this.playerDeath();
          this.movementEnabled = false;
          allEnemies.map(bug => bug.speed=0);
          setTimeout(function () {
            player.movementEnabled = true;
            player.resetChar();
            allEnemies.map(bug => bug.x=5.1);
          }, 1500);
        }
        }
    };
    checkWin(dt) {
      if (this.y === 0) {
        this.sprite = 'images/char-boy-win.png';
        setTimeout(function () {
          player.resetChar();
          alert('You Win!');
      },10);
    }
  }
  playerDeath(dt) {
    this.sprite = 'images/char-boy-dead.png';
  }
}


class Enemy extends Entity {
  constructor(x, y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.random()/20+.01;
  }
    update(dt) {
      if (this.x<5) {
        this.x += this.speed;
        /*will restart the enemy at the left side of the screen
        with a new random speed and y position*/
      } else if (this.x >= 5) {
        this.x =-1;
        this.y =Math.floor(Math.random()*3)+1;
        this.speed = Math.random()/20+.01;
      }
    }
  }
