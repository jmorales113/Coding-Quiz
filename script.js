var timer = 15;
var interval = setInterval(function(){
document.getElementById("timer").innerHTML = timer;
timer--;
if (timer === 0){
    clearInterval(interval);
    alert("Time's up!");
}
}, 1000);


