class Entity {
  constructor() {
    this.sprite = 'images/'
    this.x = 2;
    this.y = 5;
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
      switch(dir) {
        case 'up':
          if (this.y>0){
            this.y--;
          }break;
        case 'down':
          if (this.y<5){
            this.y++;
          }break;
        case 'left':
          if (this.x>0){
            this.x--;
          }break;
        case 'right':
          if (this.x<4){
            this.x++;
          }break;
      }
    };
    checkCollisions() {
      for (let enemy of allEnemies){
        if (Math.floor(enemy.x)===player.x&&Math.floor(enemy.y)===player.y){
          alert("You got smoked son!");
          this.x=2;
          this.y=5;
          allEnemies.map(bug => bug.x=4.9999999999);
        }
        }
    };
    checkWin() {
      if (this.y === 0) {
        alert('You Win!');
      }
    }
  }


class Enemy extends Entity {
  constructor(x, y){
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.random()/20;
  }
    update(dt){
      if (this.x<5){
        this.x += this.speed;
      } else if (this.x > 5) {
        this.x =-1;
        this.y =Math.floor(Math.random()*4)+1;
        this.speed = Math.random()/20;
      }
    }
  }
