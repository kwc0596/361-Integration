let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let output = document.getElementById('output');
let quotes = ['"One, Two, Three, Four, Five, Six. Six. Perfect Number"', '"One, Two, Three, Four, Five, Six. Six. Perfect Number"'];

btn.addEventListener('click', function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
	output.innerHTML = randomQuote;

})
function showDiv() {
	document.getElementById('btn2').style.display="block";
}