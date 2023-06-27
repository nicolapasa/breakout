class Ball{

    constructor(game){
        this.game=game 
        this.left=this.game.player.left+100;
        this.top=this.game.player.top-48;
       
        this.width=12
        this.height=12

        this.speed=3
        this.speedy =-this.speed
        this.speedx = this.speed * (Math.random() * 2 - 1); 
        this.toDeleting=false  
        this.element=document.createElement('div')
        this.element.style.backgroundColor='white'
        //this.element.src='./assets/ball.png'
        this.element.style.position='absolute'
        this.element.style.top=`${this.top}px`
        this.element.style.left=`${this.left}px`
        this.element.style.height=`${this.height}px`
        this.element.style.width=`${this.width}px`
        this.element.style.borderRadius='100%'
        this.game.gameScreen.appendChild(this.element)


    }


   move(){
   
    this.top +=this.speedy
    this.left +=this.speedx 
   
    this.update()
   }

   update(){
    this.element.style.left=`${this.left}px`
    this.element.style.top=`${this.top}px`
   }
    
  
   didCollide(element){
    const playerRect = element.getBoundingClientRect();
    const ballRect = this.element.getBoundingClientRect();
  
    if (
      playerRect.left < ballRect.right &&
      playerRect.right > ballRect.left &&
      playerRect.top < ballRect.bottom &&
      playerRect.bottom > ballRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  didCollideWithBorders(gameScreen){
    
        // Check for collisions with the canvas edges
  if (this.left + this.width > gameScreen.offsetWidth || this.left - this.width < 0) {
    this.speedx = -this.speedx ; // Reverse the x velocity

  }
  if (this.top + this.width > gameScreen.offsetWidth || this.top - this.width < 0) {

    this.speedy = -this.speedy  ;
  }
  }
   
  changeDirection(){
  
   // this.speedy = -this.speedy;
    this.speedy =-this.speed
    this.speedx = this.speed * (Math.random() * 2 - 1); 
  }

  checkBallOut(){
    if (this.top  > this.game.player.top){

        this.toDeleting=true;
        this.element.remove()
        
        this.game.lives-=1
        if(this.game.lives<=0){
          this.game.isGameOver=true
        }
        return true;
    }
 }


    
}