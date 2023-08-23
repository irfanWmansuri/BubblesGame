// Making Bubbles
function makeBubble(){
    let clutter = "";

for (let i =0;i<=139;i++){
    var ran = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${ran}</div>`;
}
document.querySelector(".bubblessec").innerHTML = clutter;
}
makeBubble();

// Set New Value Of Hit
let newhit;
function getNewHit(){
   newhit = Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = newhit;
}
getNewHit()

// Set Timer
let timer=60;
function runTimer(){
    let timeout = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timeout);
            document.querySelector("#hitval").textContent = `0`;
            document.querySelector(".bubblessec").innerHTML = `<h1>😑 GAME OVER 😑</h1>`
           
        }
    },1000 )
}
runTimer(); 

// Increase Score By 10
let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreplus").textContent = score;
}
increaseScore()

// Target The Bubbles
document.querySelector(".bubblessec").addEventListener("click",function(dets){
     let clickednum = Number(dets.target.textContent);
     if(clickednum === newhit){
        increaseScore();
        getNewHit();
        makeBubble();

     }
})