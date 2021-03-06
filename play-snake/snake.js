/**
 * Snake class
 */
var Snake = function(scl)
{
  /* instance variables */
  this.body = [];
  this.scl = scl;
  this.height = this.scl;
  this.width = this.scl;
	// random number between 0 and width/height to find number of cols/rows, then fround it down, then multiply it by scale
  this.position = createVector(floor(random(width/this.scl))*this.scl, floor(random(height/this.scl))*this.scl);
  this.body.push(this.position); // first element in body is also head
  this.vector = createVector(1,0);
  this.size = 1;
  this.biggestSize = 1;

  /* render snake */
  this.draw = function()
  {
    fill(255,0,0);
		strokeWeight(0.5);
    stroke(0, 0, 0);
    for (var i = 0; i < this.body.length; i++)
    {
      rect(this.body[i].x,this.body[i].y, this.width, this.height);
    }
  }

  /* incrase snakes size/length */
  this.grow = function()
  {
    this.size++;
    this.body.push(createVector(this.body[this.body.length-1].x, this.body[this.body.length-1].y));
  }

  /* updates snake's position */
  this.update = function()
  {
    // move/shift body
    if (this.body.length > 1)
    {
      for (var i = this.body.length - 1 - 1; i >= 0; i--)
      {
        this.body[i+1].x = this.body[i].x;
        this.body[i+1].y = this.body[i].y;
      }
    }

    // get heads new position
		// scale up the vector
    let scaledVector = createVector(this.vector.x*this.scl, this.vector.y*this.scl);
    this.position.add(scaledVector);

    // constraint at edges
    if (this.vector.x === -1)
    {
      // if going left, reset to the right when it hits left edge
      if(this.position.x < 0) this.position.x = width-this.scl;
    }
    else if (this.vector.x === 1)
    {
      // if going right, reset to the left when it hits right edge
      if(this.position.x > width-this.scl) this.position.x = 0;
    }
    if (this.vector.y === - 1)
    {
      // if going up, reset to the bottom when it hits up edge
      if(this.position.y < 0) this.position.y = height-this.scl;
    }
    else if (this.vector.y === 1)
    {
      // if going down, reset to the top when it hits bottom edge
      if(this.position.y > height-this.scl) this.position.y = 0;
    }

    // set first element/head to the new postion found
    this.body[0].x = this.position.x;
    this.body[0].y = this.position.y;
  }

  /* chnages snakes direction */
  this.changeVector = function(xVector, yVector)
  {
    this.vector = createVector(xVector, yVector);
  }

  /* checks to see if snake has hit it self, and deltes its body */
  this.resolveSelfCollision = function()
  {
    let collided = false;
    for (var i = 1; i < this.body.length; i++)
    {
      if (this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y)
      {
        collided = true;
        break;
      }
    }
    if(collided)
    {
      if (this.size > this.biggestSize) this.biggestSize = this.size;
      this.clearBody();
    }
  }

  /* deletes body apart from head */
  this.clearBody = function()
  {
    let limit = this.body.length;
    for (var i = 1; i < limit; i++)
    {
      this.body.pop();
    }
    this.size = 1;
  }
}
/* End of snake class */
