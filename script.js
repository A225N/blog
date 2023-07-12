var i = 0;
var images = [];
var caption = [];
var time = 3000;

var arrow_right = document.getElementById("arrow_right");
var arrow_left = document.getElementById("arrow_left");

var slide = document.getElementById("slide");

images[0] = './image/gunung.jpeg';
images[1] = './image/susi2.jpg';
images[2] = './image/susi3.jpg';

caption[0] = 'caption1';
caption[1] = 'caption2';
caption[2] = 'caption3';

arrow_right.addEventListener('click', next);
arrow_left.addEventListener('click', prev);


function next() {
    document.getElementById(caption[i]).style.visibility = 'hidden';
    if (i >= images.length - 1) {
        document.getElementById(caption[i]).style.visibility = 'visible';
        return false;
    }
    i++;
    slide.src = images[i];
    document.getElementById(caption[i]).style.visibility = 'visible';
}

function prev() {
    document.getElementById(caption[i]).style.visibility = 'hidden';
    if (i <= 0) {
        document.getElementById(caption[i]).style.visibility = 'visible';
        return false;        
    }
    i--;
    slide.src = images[i];
    document.getElementById(caption[i]).style.visibility = 'visible';
    console.log(i);
}

// setTimeout("changeImage()", time);
// DEAD INSIDE :)


window.onload = slide.src = images[i];
window.onload = document.getElementById(caption[i]).style.visibility = 'visible';