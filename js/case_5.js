var but = document.querySelector ('button');
var b = document.querySelector ('ul');

var newLi = document.createElement ('li');
newLi.innerText = 'Первый элемент списка';
var x = true;

var changer = function () {
    if (x == true) {
		b.insertBefore (newLi, b.querySelector('#list'));
        x = false;
    } else {
    	var g = document.getElementsByTagName ('li');
		b.removeChild (g[0]);
        x = true;
    }
}

but.onclick = changer;



