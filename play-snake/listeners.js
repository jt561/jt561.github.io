$(document).ready(function() {
	$('#up').click(function() {
		if (snake.vector.y != 1) snake.changeVector(0,-1);
	});
	$('#down').click(function() {
		if (snake.vector.y != -1) snake.changeVector(0,1);
	});
	$('#left').click(function() {
		if (snake.vector.x != 1) snake.changeVector(-1,0);
	});
	$('#right').click(function() {
		if (snake.vector.x != -1) snake.changeVector(1,0);
	});
});
