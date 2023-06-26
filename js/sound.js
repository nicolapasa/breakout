class Sound{


    constructor(game, src){
         this.game=game 
         this.src=src 
         this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.game.gameScreen.appendChild(this.sound);
    }

    play(){
        this.sound.play();
    }
    stop(){
        this.sound.pause();
    }
}

