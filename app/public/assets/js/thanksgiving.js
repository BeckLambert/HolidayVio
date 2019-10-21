var countDownDate = new Date("Nov 28, 2019 15:37:25").getTime();

var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
document.getElementById("countdown").innerHTML = "Countdown to Thanksgiving: " + "<br>" + days + " days " + hours + " hours " + minutes + " minuets " + seconds + " seconds ";
                
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
}
}, 1000);