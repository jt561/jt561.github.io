$(document).ready(function() {
	$('#up').click(function() {
		if (snake.velocity.y != 1) snake.changeVelocity(0,-1);
	});
	$('#down').click(function() {
		if (snake.velocity.y != -1) snake.changeVelocity(0,1);
	});
	$('#left').click(function() {
		if (snake.velocity.x != 1) snake.changeVelocity(-1,0);
	});
	$('#right').click(function() {
		if (snake.velocity.x != -1) snake.changeVelocity(1,0);
	});
});
