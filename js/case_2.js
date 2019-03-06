var but = document.querySelector ('button');
var x = true;

var changer = function () {
    if (x == true) {
        var content = document.querySelector('span');
        content.innerHTML = "<h3>Привет</h3>";
        x = false;
    }  else {
        var content = document.querySelector('span');
        content.innerHTML = "<b>Hello</b>";
        x = true;
    }
}

but.onclick = changer;
