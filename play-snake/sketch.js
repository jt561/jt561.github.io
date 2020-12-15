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

// called once
function setup() {
  // create board/canvas
  let deviceWidth = window.screen.width-12;
  let deviceHeight = window.screen.height-230;
  let documentWidth = $(document).width() - 5;
  let documentHeight = $(document).height() - 100;
  createCanvas(documentWidth, documentHeight);
  // assign scale
  scl = 10;
  // assign/create new snake and food object with the same scale
  snake = new Snake(scl);
  food = new Food(scl);
  // set framerate to 10
  frameRate(12);
  // add buttons for mobile users
  if(window.matchMedia("(max-width: 767px)").matches)
  {
    var upButton = $('<button id=up class=btn>up</button>');
    var downButton = $('<button id=down class=btn>down</button>');
    var leftButton = $('<button id=left class=btn>left</button>');
    var rightButton = $('<button id=right class=btn>right</button>');
    upButton.click(function() {
      if (snake.velocity.y != 1) snake.changeVelocity(0,-1);
    });
    downButton.click(function() {
      if (snake.velocity.y != -1) snake.changeVelocity(0,1);
    });
    leftButton.click(function() {
      if (snake.velocity.x != 1) snake.changeVelocity(-1,0);
    });
    rightButton.click(function() {
      if (snake.velocity.x != -1) snake.changeVelocity(1,0);
    });
    $('body').append('<div class="mobile-directional-btns"><div class=row1></div><div class=row2></div><div class=row3></div></div>');
    $('.mobile-directional-btns .row1').append(upButton);
    $('.mobile-directional-btns .row2').append( leftButton, rightButton);
    $('.mobile-directional-btns .row3').append(downButton);
  }
}

// draw loop
function draw() {
  // background color - black
  background(0,0,0);


  // update and draw snake and food object
  snake.update();
  // reset snake if it hits it self
  snake.resolveSelfCollision();
  food.draw();
  snake.draw();
  // if snake eats food
  if (dist(snake.position.x,snake.position.y,food.position.x,food.position.y) < 20)
  {
    food.newPosition();
    snake.grow();
  }
  updateScores();
}

// keyboard listener
function keyPressed() {
    switch(keyCode)
    {
      case UP_ARROW: if (snake.velocity.y != 1)  snake.changeVelocity(0,-1); break;
      case DOWN_ARROW: if (snake.velocity.y != -1) snake.changeVelocity(0,1); break;
      case LEFT_ARROW: if (snake.velocity.x != 1) snake.changeVelocity(-1,0); break;
      case RIGHT_ARROW: if (snake.velocity.x != -1) snake.changeVelocity(1,0); break;
    }
}

// updates score
function updateScores()
{
  let size = snake.size;
  let biggestSize = (snake.size > snake.biggestSize) ? snake.size : snake.biggestSize;
  $('#snake-size').text(size);
  $('#biggest-snake-size').text(biggestSize);
}
/* End of main board */
