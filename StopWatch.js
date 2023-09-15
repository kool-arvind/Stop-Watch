let timer = document.getElementsByClassName("stopwatch");
let st = document.getElementsByClassName("start")
let sp = document.getElementsByClassName("stop")
let re = document.getElementsByClassName("reset")
let stopTimer = true;

function start(){
   if(stopTimer == true){
    stopTimer = false;
    startKaro();
   }
}
function stop(){
    if(stopTimer == false){
        stopTimer = true;
    }
}





let hr = 0;
let min = 0;
let sec = 0;


function startKaro(){
 if( stopTimer == false){
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)


    sec = sec + 1;
    if(sec == 60){
        min = min + 1;
        sec = 0;
    }
    if(min == 60){
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hr < 10){
        hr = "0" + hr;
    }


    timer[0].innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("startKaro()",1000)
 }
}
function reset(){
    timer[0].innerHTML = "00:00:00"
    stopTimer = true;
    hr = 0;
    sec = 0;
    min = 0;
}


