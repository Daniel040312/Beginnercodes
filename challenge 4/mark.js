var wrapper2 = document.getElementById('appear');
var wrapper = document.getElementById('disappear');
var submit = document.getElementById('submit');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var oneHTML = "<div>You selected 1 out of 5</div>";
var twoHTML = "<div>You selected 2 out of 5</div>";
var threeHTML = "<div>You selected 3 out of 5</div>";
var fourHTML = "<div>You selected 4 out of 5</div>";
var fiveHTML = "<div>You selected 5 out of 5</div>";
var you = document.getElementById('you');

if (one.onclick = function() {
    you.innerHTML = oneHTML;
})

if (two.onclick = function() {
    you.innerHTML = twoHTML;
})

if (three.onclick = function() {
    you.innerHTML = threeHTML;
})

if (four.onclick = function() {
    you.innerHTML = fourHTML;
})

if (five.onclick = function() {
    you.innerHTML = fiveHTML;
})

submit.onclick = function() {
document.getElementById('disappear').style.display = "none" 
document.getElementById('appear').style.display = "initial"
}

var digits = document.getElementById('digits')
    digits.addEventListener('submit',function(event){
    event.preventDefault()
}) 






// transition-delay: 5s;
//     transition-property: all;
//     transition-duration: 5s;
