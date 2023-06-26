class UI{


    constructor(game){
 
     this.game=game
     this.scoreBoard=document.getElementById("score")
     this.lifeBoard=document.getElementById("lives")
     this.finalScoreOver=document.getElementById("finalScoreOver")
   
    }
   
 
    update(){
     this.scoreBoard.innerText=this.game.score 
     this.lifeBoard.innerText=this.game.lives 
     this.finalScoreOver.innerText=this.game.score 

    }
 
 }