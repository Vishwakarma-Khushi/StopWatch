const stopwatch = document.getElementById("stopwatch");
let timer;
let hour=0;
let min=0;
let sec=0;
let ms = 0;
function start(){
    ms++;
    if(ms==100){
        ms=0;
        sec++;
    }
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hour++;
    }
    let formattedHour = hour.toString().padStart(2,"0");
    let formattedMin = min.toString().padStart(2,"0");
    let formattedSec = sec.toString().padStart(2,"0");
    let formattedMS = ms.toString().padStart(2,"0");
    stopwatch.textContent= `${formattedHour}:${formattedMin}:${formattedSec}:${formattedMS}`;
}
function startTimer(){
    timer = setInterval(start,10);
}
function stopTimer(){
    clearInterval(timer);
}
function resetTimer(){
    clearInterval(timer);
    hour = min = sec = ms = 0;
    stopwatch.textContent= `00:00:00:00`;

}
