var button = document.getElementsByTagName ('button');
var result = document.getElementsByTagName ('span');

var sum = function () {
    var a = parseInt (document.querySelector('.number1').value);
	var b = parseInt (document.querySelector('.number2').value);
	result[1].innerText = a + b;
	result[0].innerText = '+';
}

var sub = function () {
	var a = parseInt (document.querySelector('.number1').value);
	var b = parseInt (document.querySelector('.number2').value);
	result[1].innerText = a - b;
	result[0].innerText = '-';
}

var mult = function () {
	var a = parseInt (document.querySelector('.number1').value);
	var b = parseInt (document.querySelector('.number2').value);
	result[1].innerText = a * b;
	result[0].innerText = '*';
}

var div = function () {
	var a = parseInt (document.querySelector('.number1').value);
	var b = parseInt (document.querySelector('.number2').value);
	result[1].innerText = (a / b);
	result[0].innerText = '/';
}

button[0].onclick = sum;
button[1].onclick = sub;
button[2].onclick = mult;
button[3].onclick = div;