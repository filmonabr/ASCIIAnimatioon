
var time;
var animator;
var i = 1;
var timer = 250;
window.onload = function () {
    var anim = document.getElementById('anim');
    var area = document.getElementById('area');
    var start = document.getElementById('start');
    document.getElementById('check').onchange = speed;
    document.getElementById('stop').onclick = stop;
    var size = document.getElementById('size');
    size.onchange = sizer;
    anim.onchange = display;
    start.onclick = gobro;
}


function display() {

    var images = window.ANIMATIONS[anim.value];
    animator = images.split("=====");
    area.innerHTML = animator[0];
}

function gobro() {
    starter = 0;
    start.disabled = true;
    document.getElementById('stop').disabled = false;
    time = setInterval(animate, timer);

}


function animate() {
    starter++;
    if (starter < animator.length) {
        area.innerHTML = animator[starter];
    } else {
        starter = 0;
    }

}

function speed() {
    if (this.checked) {
        timer = 50;
    }
    else {
        timer = 250;
    }
}

function sizer() {
    area.style.fontSize = size.value;
}

function stop() {
    clearInterval(time);
    time = null;
    area.innerHTML = animator[0];
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
}