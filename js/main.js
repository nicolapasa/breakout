window.addEventListener('load', () => {
const btnStart=document.getElementById("start-game")
const btnRestart=document.getElementById("restart-game")
const namePlayerInput=document.getElementById('namePlayer')


let game

function intro(){

    namePlayerInput.style.display='block'
    btnStart.style.display='none'
    namePlayerInput.addEventListener('change', ()=>{

        if(namePlayerInput.value !='')  startGame()
    })
   
    
    
}


function startGame() {
    
    game =new Game()
    game.startGame()
}


btnStart.addEventListener('click', ()=>{
   intro()
 })
 btnRestart.addEventListener('click', ()=>{
    location.reload()
 })



})