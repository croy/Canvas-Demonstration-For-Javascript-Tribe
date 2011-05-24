$(document).ready(function() {
    $('.color').live('click', function(){
	$('.color.current').css('background-color', $(this).css('background-color'))});

    $('canvas').live('click', function(evt){
	var ctx = this.getContext('2d'),
	xPos = evt.offsetX,
	yPos = evt.offsetY;
	ctx.fillStyle = $('.color.current').css('background-color');
	ctx.fillRect(xPos, yPos, 16, 16);
    });


    $('canvas').live('mousemove', function(evt){
//	console.log('(' + evt.clientX + ',' + evt.clientY + ')');

    });
});