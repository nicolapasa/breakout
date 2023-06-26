class Player{


    constructor(game){
        this.game=game 
        //create player @todo image 
        this.pad=document.createElement('img')
        this.pad.setAttribute('src', './images/pad.png')
        this.pad.style.height=`${this.height}px`  
        this.pad.style.width=`${this.width}px` 
        this.width=96
        this.height=32
        this.left=300 
        this.top=this.game.height -this.height -8
        this.pad.style.position='absolute'
        this.pad.style.top=`${this.top}px`
        this.pad.style.left=`${this.left}px`
        this.game.gameScreen.appendChild(this.pad)
        this.balls=[];
        this.directionX=0 
        this.speed=5
    
    }



    move(){
        this.left += this.directionX *this.speed
        if(this.left<10) {
            this.left=10
          }
           // handles right hand side
    if (this.left > this.game.gameScreen.offsetWidth - this.width - 10) {
        this.left = this.game.gameScreen.offsetWidth - this.width - 10;
      }

      this.update()
    }

    update(){
        this.pad.style.left=`${this.left}px`
        this.balls.forEach(ball=>{
            ball.move();
        });  
    }

    shoot(){
        this.balls.push(new Ball(this.game))
   
    }
}