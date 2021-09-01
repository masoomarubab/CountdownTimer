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

function rotateDiv(i) {             // Flips the timers by manipulating classes.
    $(i + ".back").removeClass("moveBack");
    $(i + ".front").addClass("moveFront");
    setTimeout(function() {
      $(i + ".back").addClass("moveBack");
      $(i + ".front").removeClass("moveFront");
    }, 250);
  };

  setInterval(function() {            // function to flip the timers according to the time.
    rotateDiv(".secs")
    if ($(".secs").html() === "0") {
      rotateDiv(".mins");
    }
    if ($(".mins").html() === "0" && $(".secs").html() === "0") {
      rotateDiv(".hour");
    }
    if ($(".hours").html() === "0" && $(".mins").html() === "0" && $(".secz").html() === "0") {
      rotateDiv(".day");
    }
  }, 1000);