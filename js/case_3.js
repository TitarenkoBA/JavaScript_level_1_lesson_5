
var but = document.querySelector ('button');
var a = document.getElementsByTagName ('li');
var b = document.querySelector ('ul');
var c = document.createDocumentFragment ();
var d = a.length;
var x = true;

var changer = function () {
    if (x == true) {
    	var a = document.getElementsByTagName ('li');

        for (var i = 0; i < d; i++) {
			var newP = document.createElement ('p');
			newP.innerText = 'List ' + (i + 1);
			c.appendChild (newP);
			b.removeChild (a[0]);
		}

		b.appendChild (c);
        x = false;
    }  else {
    	var g = document.getElementsByTagName ('p');

        for (var i = 0; i < d; i++) {
			var newLi = document.createElement ('li');
			c.appendChild (newLi);
			b.removeChild (g[0]);
		}

		b.appendChild (c);
        x = true;
    }
}

but.onclick = changer;



