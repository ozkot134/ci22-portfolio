var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 


var img = $('.container');

var offset = img.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset.left) + (img.width() / 2);
    var center_y = (offset.top) + (img.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img.css('-o-transform', 'rotate(' + degree + 'deg)');
    img.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})




var img2 = $('.container--2');

var offset2 = img2.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset2.left) + (img2.width() / 2);
    var center_y = (offset2.top) + (img2.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img2.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img2.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img2.css('-o-transform', 'rotate(' + degree + 'deg)');
    img2.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img2.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})




var img3 = $('.container--3');

var offset3 = img3.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img3.width() / 2);
    var center_y = (offset3.top) + (img3.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img3.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img3.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img3.css('-o-transform', 'rotate(' + degree + 'deg)');
    img3.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img3.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})


var img4 = $('.container--4');

var offset3 = img4.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img4.width() / 2);
    var center_y = (offset3.top) + (img4.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img4.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img4.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img4.css('-o-transform', 'rotate(' + degree + 'deg)');
    img4.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img4.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})










var img5 = $('.container--5');

var offset3 = img5.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img5.width() / 2);
    var center_y = (offset3.top) + (img5.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img5.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img5.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img5.css('-o-transform', 'rotate(' + degree + 'deg)');
    img5.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img5.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})











var img7 = $('.container--6');

var offset3 = img7.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img7.width() / 2);
    var center_y = (offset3.top) + (img7.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img7.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img7.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img7.css('-o-transform', 'rotate(' + degree + 'deg)');
    img7.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img7.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})


var img8 = $('.container--8');

var offset3 = img8.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img8.width() / 2);
    var center_y = (offset3.top) + (img8.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img8.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img8.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img8.css('-o-transform', 'rotate(' + degree + 'deg)');
    img8.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img8.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})



var img9 = $('.container--9');

var offset3 = img9.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img9.width() / 2);
    var center_y = (offset3.top) + (img9.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img9.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img9.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img9.css('-o-transform', 'rotate(' + degree + 'deg)');
    img9.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img9.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})






var img6 = $('.container--6');

var offset3 = img6.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset3.left) + (img6.width() / 2);
    var center_y = (offset3.top) + (img6.height() / 2);
    var mouse_x = evt.pageX;
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 90;
    img6.css('-moz-transform', 'rotate(' + degree + 'deg)');
    img6.css('-webkit-transform', 'rotate(' + degree + 'deg)');
    img6.css('-o-transform', 'rotate(' + degree + 'deg)');
    img6.css('-ms-transform', 'rotate(' + degree + 'deg)');
    }
}

img6.mousedown(function (e) {
    mouseDown=true;
    $(document).mousemove(mouse);
});
$(document).mouseup(function (e) {
    mouseDown = false;
})