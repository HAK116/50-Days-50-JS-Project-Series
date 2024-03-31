//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let hour = min = sec = ms = "0" + 0,
startTimer;
let lapNum = 0;

let container = document.querySelector('.container');
let startBtn = document.querySelector('.container .start');
let stopBtn = document.querySelector('.container .stop');
let resetBtn = document.querySelector('.container .reset');
let lapBtn = document.querySelector('.container .lap');
let lapContainer = document.querySelector('.lap-container');

let start = () => {
        startTimer = setInterval(() => {
                ms++;
                ms = ms < 10 ? "0" + ms : ms;
                if (ms == 100) {
                        sec++;
                        ms = "0" + 0;
                        sec = sec < 10 ? "0" + sec : sec;
                }
                if (sec == 60) {
                        min++;
                        sec = "0" + 0;
                        min = min < 10 ? "0" + min : min;
                }
                if (min == 60) {
                        hr++;
                        min = "0" + 0;
                        hr = hr < 10 ? "0" + hr : hr;
                }
                putValue();
        }, 10);
        resetBtn.style.display = 'none';
        startBtn.style.display = 'none';
        lapBtn.style.display = 'block';
        stopBtn.style.display = 'block';
}

let stop =()=>{
 clearInterval(startTimer); 
 startBtn.style.display = 'block';
 resetBtn.style.display = 'block';
 lapBtn.style.display = 'none';
 stopBtn.style.display = 'none';
}

let reset =()=>{
  clearInterval(startTimer);
  hour = min = sec = ms = "0" + 0;
  lapNum = 0;
  putValue();
  container.style.height = '280px';
  lapContainer.style.display = 'none';
  lapContainer.innerHTML = '';
}

let lap =()=>{
 container.style.height = '440px'; 
 lapContainer.style.display = 'block';
 lapNum++;
 let elem = document.createElement('li');
 let lapText = `<span class="lap-num">Lap ${lapNum}</span>
                <span class="lap-timer">${hour}:${min}:${sec}.${ms}</span>`;
 elem.innerHTML = lapText;
 lapContainer.appendChild(elem);
}

let putValue =()=>{
 document.querySelector('.container .timer .ms').innerHTML = ms;
 document.querySelector('.container .timer .sec').innerHTML = sec; 
 document.querySelector('.container .timer .minute').innerHTML = min;
 document.querySelector('.container .timer .hour').innerHTML = hour;
}
