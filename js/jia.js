var num = 0;
var t = setInterval(function() {
	num += 2;
	var span1 = document.getElementById("p1");
	span1.innerText = num;
	if(num == 50) {
		clearInterval(t)
	}
}, 100);
var num1 = 0;
var t1 = setInterval(function() {
	num1 += 4;
	var span2 = document.getElementById("p2");
	span2.innerText = num1;
	if(num1 == 100) {
		clearInterval(t1)
	}
}, 100);
var num2 = 0;
var t3 = setInterval(function() {
	num2 += 400;
	var span3 = document.getElementById("p3");
	span3.innerText = num2;
	if(num2 == 100000) {
		clearInterval(t3)
	}
}, 10);