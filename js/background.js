class Background{


    constructor(game, image, posX, posY, speed){
        this.game=game
        this.image=image 
        this.posX=posX
        this.posY=posY
        this.speed=speed
        this.element=document.createElement('img')
        //this.element.style.backgroundColor=this.color
        this.element.src=image
        this.element.style.position='absolute'
        this.element.style.top=`${this.posY}px`
        this.element.style.left=`${this.posX}px`
        //this.element.style.zIndex=999
        //this.element.style.height=`${this.height}px`
        //this.element.style.width=`${this.width}px`
        this.game.gameScreen.appendChild(this.element)
    }

    move(){
        console.log(this.element.width)
          this.posX+=this.speed 
          if (this.posX > this.game.gameScreen.offsetWidth -this.element.width ) {
            this.posX=0
          }
          this.update()
    }
    update(){
        this.element.style.left=`${this.posX}px`
    }
}