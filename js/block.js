class Block{


    constructor(game, posx, posy, image, score, isHard){
        this.game=game;
        this.height = 16;
        this.width = 32;
        this.posx =posx;
        this.posy = posy;
        //this.color=color;
        this.score=score;
        this.speed=0.08;
        this.topLeft=posx+this.height;
        this.bottomRight=posx+this.width;
        this.toDeleting=false;
        this.isHard=isHard
        this.element=document.createElement('img')
        //this.element.style.backgroundColor=this.color
        this.element.src=image
        this.element.style.position='absolute'
        this.element.style.top=`${this.posy}px`
        this.element.style.left=`${this.posx}px`
        this.element.style.height=`${this.height}px`
        this.element.style.width=`${this.width}px`
        this.game.gameScreen.appendChild(this.element)
    }


    move(){
        this.posy+=0.03
        this.update()
    }

    update(){
        this.element.style.top=`${this.posy}px`
    }

    checkCollidePlayer(){

        if (this.posy >this.game.height){
           
         
              this.game.isGameOver=true
            
            return true;
        }
        return false
     }
}