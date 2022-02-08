'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value); */

let secretNumber=Math.trunc(Math.random()*20)+1; 

let score=10;
let highscore=0;



document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);

    if(!guess){
    document.querySelector('.message').textContent='No number!';

    }else if(guess===secretNumber){
    document.querySelector('.message').textContent='Correct Number!';
    score++;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent=secretNumber;

    //some inline css
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='25rem';

    

    //for highscore
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

// implementing dry principle or refactoring
    }else if(guess!==secretNumber){
        if(score>1){
        document.querySelector('.message').textContent=
        guess>secretNumber ? 'Too High! ' : 'Too Low!';
    
      score--;
        document.querySelector('.score').textContent=score;
    }   else{
        document.querySelector('.message').textContent='You lost the game';
        document.querySelector('.score').textContent=0;
    }
    
}



    /*}else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too High';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }
       

    
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too Low';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }   */
   // }    
});


document.querySelector('.again').addEventListener('click',function(){

     score=10;
     secretNumber=Math.trunc(Math.random()*20)+1;

     document.querySelector('.message').textContent='Start guessing...';
     document.querySelector('.score').textContent=score;
     document.querySelector('.number').textContent='?';
     document.querySelector('.guess').value="";

     document.querySelector('body').style.backgroundColor='#222';
     document.querySelector('.number').style.width='15rem';
 

});


