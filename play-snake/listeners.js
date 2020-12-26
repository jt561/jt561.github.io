$(document).ready(function() {

	// listeners for the buttons on the page
	// these buttons call a method to change the snakes vector appropriately.
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
