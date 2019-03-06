
var but = document.querySelector ('button');
var b = document.querySelector ('.container');
var c = document.createDocumentFragment ();
var x = true;
var abc = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

var changer = function () {
    if (x == true) {

    	for (var i = 0; i < 81; i++) {
			var newTd = document.createElement ('div');
			newTd.style.width = '50px';
			newTd.style.height = '35px';
			if (i > 72) {
				newTd.style.backgroundColor = 'gray';
				newTd.innerText = i - 72;
			} else if (i == 72) {
				newTd.style.backgroundColor = 'gray';
				newTd.innerText = '';
			} else if (i % 9 == 0) {
				newTd.style.backgroundColor = 'gray';
				newTd.innerText = abc[i / 9];
			} else {
				if (i < 9 || (i > 18 && i < 27) || (i > 36 && i < 45) || (i > 54 && i < 63)) {
					if (i % 2 == 0) {
						newTd.style.backgroundColor = 'black';
					} else {
						newTd.style.backgroundColor = 'white';
					}
				} else if ((i > 9 && i < 18) || (i > 27  && i < 36) || (i > 45 && i < 54) || (i > 63 && i < 72)){
					if (i % 2 == 0) {
						newTd.style.backgroundColor = 'black';
					} else {
						newTd.style.backgroundColor = 'white';
					}
				}
			}
			c.appendChild (newTd);
		}
		b.appendChild (c);
        x = false;
    } else {
		window.location.reload();
    }
}

but.onclick = changer;