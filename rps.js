let computerChoice;
//get storagevalue
const savedScore = localStorage.getItem("score");
//score object
let score ={
  win:0,
  lose:0,
  tie:0
}
// load previous score
if (savedScore !== null) {
    score = JSON.parse(savedScore);
}

score.display = function(){
    return `win:${score.win} ,lose:${score.lose},Tie:${score.tie}`;
  }

  //display score
   function saveScore(){
    localStorage.setItem("score",JSON.stringify(score));
   }
//reset
function resetCall(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  localStorage.setItem("Score", JSON.stringify(score));
   document.querySelector("#score").innerHTML = score.display();
}




//GENRATE  AI OUTPUT
function generate() {
  let randomValue = Math.random()* 3;
  
    if(randomValue>0 && randomValue<=1){
        return computerChoice = 'rock';


    }else if(randomValue>1 && randomValue<=2){
        return computerChoice = 'paper';

 
    } else {
       return computerChoice = 'scissor';
    }

}
// CONDITIONS CHECK 
function result(userChoice,computerChoice){
  if (userChoice==='rock'){
    if(computerChoice === 'rock'){
      score.tie++;
       return `It's a Tie`;
      
    }else if(computerChoice === 'paper'){
      score.lose++;
      return 'User Lose.';
    }else if(computerChoice === 'scissor'){
      score.win++;
      return 'User won' ;
    }
  }else if(userChoice === 'paper'){
    if(computerChoice==='rock'){
      score.win++;
      return 'User Won';
    }else if (computerChoice==='paper'){
      score.tie++;
      return `It's a Tie`;
    }else if(computerChoice === 'scissor') {
      score.lose++;
      return 'User Lose';
    }
  }else if(userChoice === 'scissor'){
    if(computerChoice==='rock'){
      score.lose++;
      return 'User Lose';
    }else if (computerChoice==='paper'){
      score.win++;
      return `User Won`;
    }else if(computerChoice === 'scissor'){
      score.tie++;
      return `Its a Tie`;
    }
  }
}
//DISPLAY RESULT
function showResult(userChoice,computerChoice,result){
  saveScore();
  alert(`U have chosen ${userChoice} ,computer chosen ${computerChoice}.and ${result} 
    ${score.display()}`);
  

}
// play
function play(userMove){
const computerChoice = generate(); 
const display = result(userMove,computerChoice);
showResult(userMove,computerChoice,display);

}
// score
