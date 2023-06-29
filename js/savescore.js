class Save{

    constructor(game){
        this.game=game 
        this.topScore=[]
    }
    
    initGame(){
        if(!localStorage.getItem("topScore")) {
            const topScoreTemp=[]
            for (let index = 1; index < 11; index++) {
                
                topScoreTemp.push({name: 'aaa', score:0})
            }
            localStorage.setItem('topScore', JSON.stringify(topScoreTemp))
            this.topScore=topScoreTemp
          
        }  
        else{
            this.topScore= JSON.parse(localStorage.getItem("topScore"))
        }
    }

    saveScore(){
      
    
     let obj={name: this.game.name,  score: this.game.score}

       let minValue = Math.min(...this.topScore.map(item => item.score));
       

       if (obj.score > minValue) {
    
         let minIndex = this.topScore.findIndex(item => item.score === minValue);
     

         this.topScore.splice(minIndex, 1, obj);
       }
   
       
   



       localStorage.setItem('topScore', JSON.stringify( this.topScore))
   
    }

    loadScore(){
        this.topScore= JSON.parse(localStorage.getItem("topScore"))
        this.topScore.sort((a, b)=>a.score-b.score ).reverse()
        this.topScore.forEach(place=>{
           this.game.listScore.innerHTML+='<div><p>'+place.name+'</p>'+' <span> '+place.score+'</span></div>' 
      })
    }
}