$(document).ready(function() {
    var brush = square;

    function markCurrent(node, cls){
	$('.current.' + cls).removeClass('current');
	node.addClass('current');}

    function square(ctx, xPos, yPos, color){
	ctx.fillStyle = color;
	ctx.fillRect(xPos, yPos, 16, 16);
    };

    function circle(ctx, xPos, yPos, color){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(xPos, yPos, 10, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
    };

    function line(lastClick){
	function drawLine(ctx, xStart, xEnd, yStart, yEnd, color){
	    ctx.strokeStyle = color;
	    ctx.lineWidth = 10;
	    ctx.beginPath();
	    ctx.moveTo(xStart, yStart);
	    ctx.lineTo(xEnd, yEnd);
	    ctx.closePath();
	    ctx.stroke();
	}

	return function(ctx, xPos, yPos, color){
	    if (lastClick){
		drawLine(ctx, lastClick.xPos, xPos, lastClick.yPos, yPos, color);
	    }
	    lastClick = {xPos : xPos, yPos : yPos};
	}
    }

    $('.color').live('click', function(){
	markCurrent($(this), 'color');
    });

    $('.brush.square').live('click', function(evt){
	markCurrent($(this), 'brush');
	brush = square;
    });

    $('.brush.circle').live('click', function(){
	markCurrent($(this), 'brush');
	brush=circle;
    });

    $('.brush.line').live('click', function(){
	markCurrent($(this), 'brush');
	brush = line();
    });

    $('canvas').live('click', function(evt){
	var ctx = this.getContext('2d'),
	xPos = evt.offsetX,
	yPos = evt.offsetY,
	color = $('.color.current').css('background-color');
	brush(ctx, xPos, yPos, color);
    });

    $('canvas').live('mousemove', function(evt){
	console.log('(' + evt.offsetX + ',' + evt.offsetY + ')');
    });
});