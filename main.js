
//new GAME
let newGame = document.getElementById('newGame')
//reset
const reset = (activePlayer, inactivePlayer) => {
  if(player1.active === true) {
    activePlayer   = player1
    inactivePlayer = player2
  }else{
    activePlayer  = player2
    inactivePlayer = player1
  }
  activePlayer.current                      = 0
  activePlayer.global                       = 0
  activePlayer.displayCurrent.textContent   = 0
  activePlayer.displayGlobal.textContent    = 0

  inactivePlayer.current                    = 0
  inactivePlayer.global                     = 0
  inactivePlayer.displayCurrent.textContent = 0
  inactivePlayer.displayGlobal.textContent  = 0

  player1.active                            = true
  player1.box.style.border                  = activeBox
  player2.active                            = false
  player2.box.style.border                  = 'none'
}
newGame.addEventListener('click', reset)

// DICE
let roll       = document.getElementById('roll')
let diceResult = document.getElementById('diceResult')
let result     = 1


// classe PLAYER
class player{
  constructor(player, current, global, isActive, box, displayCurrent, displayGlobal){
    this.player         = player;
    this.current        = current;
    this.global         = global;
    this.active         = isActive;
    this.box            = box;
    this.displayCurrent = displayCurrent
    this.displayGlobal  = displayGlobal
  }
}
// player display
let displayCurrent1 = document.getElementById('current1')
let displayCurrent2 = document.getElementById('current2')
let displayGlobal1 = document.getElementById('global1')
let displayGlobal2 = document.getElementById('global2')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
const activeBox = 'solid white 2px'
box1.style.border = activeBox

// instances PLAYER
const player1 = new player(1,0,0,true,box1, displayCurrent1, displayGlobal1)
const player2 = new player(2,0,0,false,box2, displayCurrent2, displayGlobal2)
player1.displayCurrent.textContent = player1.current
player2.displayCurrent.textContent = player2.current
player1.displayGlobal.textContent  = player1.global
player1.displayGlobal.textContent  = player2.global


//ROLL the dice!
const diceRoll = (activePlayer, inactivePlayer) => {
  if(player1.active === true) {
    activePlayer   = player1
    inactivePlayer = player2
  }else{
    activePlayer  = player2
    inactivePlayer = player1
  }
  result = Math.floor(Math.random()*6 + 1)
  diceResult.textContent = result
  if( result === 1){
    activePlayer.current = 0
    activePlayer.displayCurrent.textContent = activePlayer.current
    activePlayer.active = false
    activePlayer.box.style.border = 'none'
    inactivePlayer.active = true
    inactivePlayer.box.style.border = activeBox
  }else{
    activePlayer.current += result
    activePlayer.displayCurrent.textContent = activePlayer.current
  }
}
diceResult.textContent = result
roll.addEventListener('click', diceRoll)

//HOLD
const holdScor = (activePlayer, inactivePlayer) =>{
  if(player1.active === true) {
    activePlayer   = player1
    inactivePlayer = player2
  }else{
    activePlayer   = player2
    inactivePlayer = player1
  }

  activePlayer.global = activePlayer.global + activePlayer.current 
  if (activePlayer.global >= 100){
      alert('victoire du joueur '+activePlayer.player+' !')
      activePlayer.current = 0
      activePlayer.global = 0
      activePlayer.displayCurrent.textContent = activePlayer.current
      activePlayer.displayGlobal.textContent = activePlayer.global
      inactivePlayer.current = 0
      inactivePlayer.global = 0
      inactivePlayer.displayCurrent.textContent = inactivePlayer.current
      inactivePlayer.displayGlobal.textContent = inactivePlayer.global
        
  }else{
    activePlayer.displayGlobal.textContent = activePlayer.global
    activePlayer.current = 0
    activePlayer.displayCurrent.textContent = activePlayer.current
    activePlayer.active = false
    activePlayer.box.style.border = 'none'
    inactivePlayer.active = true
    inactivePlayer.box.style.border = activeBox 
    }
  
}
let hold = document.getElementById('hold')
hold.addEventListener('click',holdScor)









