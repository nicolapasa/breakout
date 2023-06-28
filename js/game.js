class Game{

    constructor(){
        
        this.width=640
        this.height=480 
        this.gameIntro=document.getElementById('game-intro')
        this.gameContainer=document.getElementById('game-container')
        this.gameScreen=document.getElementById('game-screen')
        this.gameOver=document.getElementById('game-over')
        this.gameWinScreen=document.getElementById('game-win')
        this.screenTitle=document.getElementById('screenTitle')
        this.btnAudioController=document.getElementById('audioController')
        this.namePlayerInput=document.getElementById('namePlayer')
        this.scoreBoardTop=document.getElementById('scoreBoardTop')
        this.listScore=document.getElementById('list')
        this.btnStart=document.getElementById("start-game")
        this.player=new Player(this)
        this.handler=new HandleInput(this)
        this.ui=new UI(this)
        this.blockSound=new Sound(this, './sound/block.wav')
        this.musicGame=new Sound(this, './sound/mega.mp3')
        this.save=new Save(this)
        this.isGameOver=false
        this.blocks=[]
        this.score=0
        this.lives=3
        this.gameWin=false
        this.soundOn=true
        this.name =''
        this.isEnd=false

    }

    startGame(){
        this.gameContainer.style.display='block'
        this.gameIntro.style.display='none'
        this.musicGame.play()
        this.name=this.namePlayerInput.value
        this.save.initGame()
        for (let i = 0; i < 3; i++) {
            for (let j = 1; j < 16; j++) {
               
                this.blocks.push(new Block(this, j*35, i*18, './images/bricksYellow.png', 200, false))
            }
          
        } 
        for (let i = 3; i < 5;i++) {
            for (let j = 1; j < 16; j++) {
                this.blocks.push(new Block(this, j*35, i*18, './images/bricksPurple.png', 200, false))
            }
          
        } 
        for (let i = 5; i < 8; i++) {
            for (let j = 1; j < 16; j++) {
                this.blocks.push(new Block(this, j*35, i*18, './images/bricks1.png', 300, true))
            }
          
        } 
        this.gameLoop()
    }
    update(){
        this.soundController()
        this.player.move()
        this.handler.update()
        this.blocks.forEach(block=> {
            block.move()
            block.checkCollidePlayer()
            this.player.balls.forEach(ball=> {
                if(ball.didCollide(block.element)){
                    this.blockSound.play()
                        if(block.isHard) {
                          block.isHard=false
                          block.element.src='./images/bricks1-r.png'
                        }
                        else{
                            block.toDeleting=true;
                            block.element.remove()
                           
                            this.score+=block.score
                        }
                       
                        const hitFromLeft = () => ball.left + 2  - ball.speedx <= block.left;
                        const hitFromRight = () => ball.left - ball.speedx >= block.left + block.width;
                       // ball.changeDirection()
                       if (hitFromLeft() || hitFromRight()) {
                        ball.speedx  = -ball.speedx;
                      } else { // Hit from above or below
                        ball.speedy = -ball.speedy;
                      }
                    
                       
                    }
            })


        })    
        this.player.balls.forEach(ball=>{
            ball.didCollideWithBorders(this.gameScreen)
            ball.checkBallOut()
            if(ball.didCollide(this.player.pad))  ball.changeDirection()
        })

        this.blocks= this.blocks.filter(block=>!block.toDeleting)
        this.player.balls= this.player.balls.filter(ball=>!ball.toDeleting)
          
        
        this.ui.update()

        if(this.blocks.length===0) {
            this.gameWin=true 
           // this.endGame()
           this.isEnd=true
        }

    }


    gameLoop(){
        
        if(!this.isEnd ){
            this.update()
            requestAnimationFrame(()=>{
                this.gameLoop()
            })
    
        }
        else{
            this.endGame()
        }
      
      
    }
    endGame(){
        this.gameContainer.style.display='none'
        this.gameOver.style.display='block'

        this.save.saveScore() 
        this.save.loadScore() 
       if(this.isGameOver) {
        this.screenTitle.innerText='Game Over'
       }
       else{
        this.screenTitle.innerText='You Win!'
       }
       
    }


    soundController(){
        this.btnAudioController.addEventListener('click', (event)=>{
            event.preventDefault()
            if(this.soundOn){
              this.musicGame.stop()
              this.btnAudioController.innerText='Play Music'
              this.soundOn=false
              
            }
            else{
                this.musicGame.play()
                this.btnAudioController.innerText='Stop Music'
                this.soundOn=true
            }
           
            

        })
    }


}


