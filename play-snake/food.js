/**
 * Food class
 */
var Food = function(scl)
{
  /* instance variables */
  this.scl = scl;
  this.height = this.scl;
  this.width = this.scl;
  this.position = createVector(random(width/this.scl),random(height/this.scl)).mult(this.scl);

  /* render food */
  this.draw = function()
  {
    fill(0,255,0);
    stroke(0,255,0);
    rect(this.position.x,this.position.y, this.width, this.height);
  }

  /* updates foods position */
  this.newPosition = function()
  {
    let cols = width/this.scl;
    let rows = height/this.scl;
    this.position = createVector(random(cols),random(rows));
    this.position.mult(this.scl);
  }
}
/* End of food class */
