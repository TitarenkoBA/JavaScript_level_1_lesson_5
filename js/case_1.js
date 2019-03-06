var but = document.querySelector ('button');
var x = true;

var changer = function () {
    if (x == true) {
        var content = document.querySelector('span');
        content.innerHTML = "Привет";
        x = false;
    }  else {
        var content = document.querySelector('span');
        content.innerHTML = "Hello";
        x = true;
    }
}

but.onclick = changer;
