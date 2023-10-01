var timer = 60;
var score = 0;
var Randomhit ;
function Bubblemaker(){var chall = "";
for(var i= 1;i<=132;i++){
    var rn = Math.floor(Math.random()*10);
    chall += `<div id="bubble">${rn}</div>`;

}
document.querySelector(".pdbt").innerHTML = chall;}

function Timer() {
    var timerInt = setInterval(function() {
        if(timer > 0){
            timer --;
            document.querySelector("#timeval").innerHTML = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pdbt").innerHTML='<h1>Game Over</h1>'
                }
    },1000);
}
function increasingScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    console.log("hello");
}
function Hiter() {
    Randomhit = Math.floor(Math.random()*10);
    document.querySelector("#hiterval").innerHTML = Randomhit;
}

function clickBubble(){
    document.querySelector(".pdbt").addEventListener("click",function(detail){
        var hit = Number(detail.target.textContent);
        if(hit === Randomhit){
            Hiter();
            Bubblemaker();
            increasingScore();
        }
        else{
            Hiter();
            // increasingScore();
            Bubblemaker();
        }
        
    })

}

Timer();
Bubblemaker();
Hiter();
clickBubble();
