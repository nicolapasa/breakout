class HandleInput{


    constructor(game){
        this.game=game 
    }


    update(){

        document.addEventListener('keydown', (event)=>{

            const keysPossible=['ArrowLeft', 'ArrowRight', ' ']
            const key=event.key
           
            if(keysPossible.includes(key)){


                   switch (key) {
                    case 'ArrowLeft':
                        this.game.player.directionX=-1
                    break;
                    case 'ArrowRight':
                        this.game.player.directionX=1
                    break;
                    case ' ':
                        if(this.game.player.balls.length===0)      this.game.player.shoot()
                    break;
                   
                   }
                       


            }
             

        })

        document.addEventListener('keyup', (event)=>{
            this.game.player.directionX=0

        })
    }
}