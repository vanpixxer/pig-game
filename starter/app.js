/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// create variable to keep track of score for each player
var scores, roundScore, activePlayer;

 scores = [0, 0];
 roundScore = 0;

// also need a variable to tell us who is the current active player
 activePlayer = 0;


  // document.querySelector('#current-' + activePlayer).textContent = dice;
 //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

  //var x = document.querySelector('#score-0').textContent;


  document.querySelector('.dice').style.display = 'none';

//set all initial values to zero
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0'; 
  document.getElementById('current-1').textContent = '0'; 

// set up event handler
  document.querySelector('.btn-roll').addEventListener('click', function() {
      // 1. we need a random number
      var dice = Math.floor(Math.random() * 6) + 1;
      
      // 2. display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      
      
      // 3. update the round score if the rolled number was not 1
  });