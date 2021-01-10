/**
 * Food class
 */
var Food = function(scl)
{
  /* instance variables */
  this.scl = scl;
  this.height = this.scl;
  this.width = this.scl;
  this.position = createVector(floor(random(width/this.scl))*this.scl, floor(random(height/this.scl))*this.scl);

  /* render food */
  this.draw = function()
  {
    fill(0,255,0);
		strokeWeight(0.2);
    stroke(0, 0, 0);
    rect(this.position.x,this.position.y, this.width, this.height);
  }

  /* updates foods position */
  this.newPosition = function()
  {
    this.position = createVector(floor(random(width/this.scl))*this.scl, floor(random(height/this.scl))*this.scl);
  }
}
/* End of food class */
