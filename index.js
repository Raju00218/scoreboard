const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");


  let score = 0;
let oneScore =0;

function add1(){
    score +=1;
   console.log(score);

   homeScore.innerText=score;
}

function add2(){
    score +=2;
   console.log(score);

   homeScore.innerText=score;
}

function add3(){
    score +=3;
   console.log(score);

   homeScore.innerText=score;
}
function resetHome(){
    score = 0;
    homeScore.innerText = score;
    console.log(score)
}


// guest Score Function

function pluse1(){
    oneScore+=1
    console.log(oneScore);

 guestScore.innerText =oneScore;
}

function pluse2(){
    oneScore+=2
    console.log(oneScore);

 guestScore.innerText =oneScore;
}
function pluse3(){
    oneScore+=3
    console.log(oneScore);

 guestScore.innerText =oneScore;
}
function reset(){
    oneScore = 0;
    console.log(oneScore = 0);
    guestScore.innerText = oneScore;

}