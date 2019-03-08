var but = document.querySelector ('button');
var x = true;

var changer = function () {
    if (x == true) {
        but.innerHTML = "Привет";
        x = false;
    }  else {
 
        but.innerHTML = "Click me!";
        x = true;
    }
}

but.onclick = changer;
