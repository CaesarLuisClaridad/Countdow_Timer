

const newyear = "1 Jan 2024";
let daylabel = document.getElementById("days");
let hourlabel = document.getElementById("hours");
let minlabel = document.getElementById("minute");
let seclabel = document.getElementById("sec");


function countDown(){

    const newYear = new Date(newyear);
    const currentdate = new Date();

    second = Math.floor(newYear - currentdate )/1000;

    const day = Math.floor(second / 3600 / 24);
    const hours = Math.floor(second / 3600 % 24);
    const minutes = Math.floor(second / 60 % 60);
    const seconds = Math.floor(second % 60);
    console.log(day, hours, minutes, seconds);   

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);

