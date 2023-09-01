'use strict';

//Selecting DOM elements
const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1'); 


//Initalizing variables
const scores= [0,0];
let currentscore = 0;
let activeplayer = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');



//Function-- switchPlayer
const switchPlayer = function(){
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer= activeplayer === 0 ? 1 : 0;
    currentscore = 0 ;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}



//Functionality- btnroll
btnroll.addEventListener('click', function(){
    if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    if(dice!=1){
        currentscore = currentscore + dice;
        document.querySelector(`#current--${activeplayer}`).textContent = currentscore;
    }
    else{
        switchPlayer();
    }
    }
})


//Functionality- btnhold
btnhold.addEventListener('click',function(){
    if (playing) {
    scores[activeplayer]= scores[activeplayer] + currentscore;
    
    document.querySelector(`#score--${activeplayer}`).textContent = scores[activeplayer];
    
    if(scores[activeplayer] >= 50){
        playing=false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }else{
        switchPlayer();
    }
    }
})


//Functionality- btnNew
btnNew.addEventListener('click',function(){
    
    playing = true;
    const scores= [0,0];
    let currentscore = 0;
    let activeplayer = 0;
    diceEl.classList.add('hidden');
    
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent= 0;
   
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
})

