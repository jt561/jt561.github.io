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
  this.position = createVector(width/2,height/2);
  this.body.push(this.position); // first element in body is also head
  this.velocity = createVector(1,0);
  this.size = 1;

  /* render snake */
  this.draw = function()
  {
    fill(255,0,0);
    stroke(255,0,0);
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
    let scaledVelocity = createVector(this.velocity.x*this.scl, this.velocity.y*this.scl);
    this.position.add(scaledVelocity);

    // constraint at edges
    if (this.velocity.x === -1)
    {
      // if going left, reset to the right when it hits left edge
      if(this.position.x < 0) this.position.x = width-this.scl;
    }
    else if (this.velocity.x === 1)
    {
      // if going right, reset to the left when it hits right edge
      if(this.position.x > width) this.position.x = 0;
    }
    else if (this.velocity.y === - 1)
    {
      // if going up, reset to the bottom when it hits up edge
      if(this.position.y < 0) this.position.y = height-this.scl;
    }
    else if (this.velocity.y === 1)
    {
      // if going down, reset to the top when it hits bottom edge
      if(this.position.y > height) this.position.y = 0;
    }

    // set first element/head to the new postion found
    this.body[0].x = this.position.x;
    this.body[0].y = this.position.y;
  }

  /* chnages snakes direction */
  this.changeVelocity = function(xVelocity, yVelocity)
  {
    this.velocity = createVector(xVelocity, yVelocity);
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
  }
}
/* End of snake class */
