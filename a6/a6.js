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

var offset = img2.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset.left) + (img2.width() / 2);
    var center_y = (offset.top) + (img2.height() / 2);
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

var offset = img3.offset();
var mouseDown = false;
function mouse(evt) {
    if(mouseDown ==true){
    var center_x = (offset.left) + (img3.width() / 2);
    var center_y = (offset.top) + (img3.height() / 2);
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