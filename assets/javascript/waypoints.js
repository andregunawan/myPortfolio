var pimg2 = $('.pimg2');
var pimg3 = $('.pimg3');

pimg2.waypoint(function(direction) {

    if(direction == 'down') {
        pimg2.addClass('pimg2-animate');
    } else {
        pimg2.removeClass('pimg2-animate');
    }

}, {offset: '50%'});

pimg3.waypoint(function(direction) {

    if(direction == 'down') {
        pimg2.removeClass('pimg2-animate');
    } else {
        pimg2.addClass('pimg2-animate');
    }

}, {offset: '50%'});
