let countdownDate = new Date("Sept 10,2021 12:00:00").getTime();

let updateCountdown = setInterval(() => {
    let currentDate = new Date().getTime();

    let diffBetweenDates = countdownDate - currentDate;

    let days = Math.floor(diffBetweenDates / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diffBetweenDates % (1000 * 60 * 60 )) / (1000 * 60));
    let secs = Math.floor((diffBetweenDates % (1000 * 60)) / (1000));

    document.querySelector(".day").innerHTML=days;
    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".mins").innerHTML=mins;
    document.querySelector(".secs").innerHTML=secs;


    if(diffBetweenDates<0){
        alert("Launched!");
    }
},1000)
