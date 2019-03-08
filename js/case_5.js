var but = document.querySelector ('button');
var b = document.querySelector ('ul');

var changer = function () {
    var newLi = document.createElement ('li');
	newLi.innerText = 'Новый элемент списка';
	b.insertBefore (newLi, b.querySelector('#list'));
}

but.onclick = changer;



