/**
 * Main board
 */

/* Global variables */
// column/row size/scale
var scl;
// snake object
var snake;
// food object
var food;
// frame rate
let sfps;

// called once
function setup() {
	// set framerate to 10
	sfps = 10;
  frameRate(sfps);
	// assign scale/size of a square
  scl = (window.matchMedia("(max-width: 1024px)").matches) ? 10:20;
  // create board/canvas
	// full width of screen - not anymore
  let deviceWidth = window.screen.width - ((window.matchMedia("(max-width: 768px)").matches) ? 30:(window.matchMedia("(max-width: 1024px)").matches) ? 130:320);
	// try to get only 50% of screen on mobile, but higher percentage on tablet and desktop
  let deviceHeight = window.screen.height - ((window.matchMedia("(max-width: 768px)").matches) ? 400:(window.matchMedia("(max-width: 1024px)").matches) ? 530:320);
  createCanvas(floor(deviceWidth)-floor(deviceWidth)%scl, floor(deviceHeight)-floor(deviceHeight)%scl);
  // assign/create new snake and food object with the same scale
  snake = new Snake(scl);
  food = new Food(scl);
}
// draw loop
function draw() {
  // background color - black
  background(0,0,0);

	// draw grid
	let cols = floor(width)/scl;
	let rows = floor(height)/scl;
	for (let i = 0; i < cols; i++)
	{
		for (let j = 0; j < rows; j++)
		{
			// hide grid for now
			stroke("white");
			fill("black");
			push();
			strokeWeight(0.1);
			rect(i*scl, j*scl, scl, scl);
			pop();
		}
	}

  // update and draw snake and food object
  snake.update();
  // reset snake if it hits it self
  snake.resolveSelfCollision();
	// if snake eats food
  if (dist(snake.position.x,snake.position.y,food.position.x,food.position.y) < scl)
  {
    food.newPosition();
    snake.grow();
  }
  updateScores();

  food.draw();
  snake.draw();
}

// responsive canvas when the window size changes
function windowResized() {
	// only on desktop
	if ((window.matchMedia("(min-width: 1024px)").matches))
	{
		// full width of screen
	  let deviceWidth = windowWidth;
		// try to get only 50% of screen on mobile, but higher percentage on tablet and desktop
	  let deviceHeight = windowHeight - 300;
	  resizeCanvas(deviceWidth, deviceHeight);
	}
}

// keyboard listener
function keyPressed() {
    switch(keyCode)
    {
      case UP_ARROW: if (snake.vector.y != 1)  snake.changeVector(0,-1); break;
      case DOWN_ARROW: if (snake.vector.y != -1) snake.changeVector(0,1); break;
      case LEFT_ARROW: if (snake.vector.x != 1) snake.changeVector(-1,0); break;
      case RIGHT_ARROW: if (snake.vector.x != -1) snake.changeVector(1,0); break;
    }
}

// updates score
function updateScores()
{
  let size = snake.size;
  let biggestSize = (snake.size > snake.biggestSize) ? snake.size:snake.biggestSize;
  $('#snake-size').text(size);
  $('#biggest-snake-size').text(biggestSize);
}
/* End of main board */
