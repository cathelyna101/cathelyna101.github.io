var t = 0;

function moveit() {
    t += 0.05;

    var r = 100;
    var xcenter = 200;
    var ycenter = 100;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#friends').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit();
    });
}

$(document).ready(function() {
    moveit();
});
