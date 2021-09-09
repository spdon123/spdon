document.querySelector(".w").addEventListener("click", sagar)
function sagar() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

document.querySelector(".a").addEventListener("click", a)
function a() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}

document.querySelector(".s").addEventListener("click", s)
function s() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}

document.querySelector(".d").addEventListener("click", d)
function d() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}

document.querySelector(".j").addEventListener("click", j)
function j() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}

document.querySelector(".k").addEventListener("click", k)
function k() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}

document.querySelector(".l").addEventListener("click", l)
function l() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}

document.addEventListener("keypress", function (event) {
    switch (event.key) {
        case 'w':
        case 'W':
            sagar();
            break;
        case 'a':
            a();
            break;
        case 's':
            s();
            break;
        case 'd':
            d();
            break
        case 'j':
            j();
            break;
        case 'k':
            k();
            break;
        case 'l':
            l();
            break
        default:
            console.log(event.key)

    }
})
