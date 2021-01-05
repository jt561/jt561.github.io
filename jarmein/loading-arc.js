/**
 * Loading arc object "class"
 */

/* Global variables */

// constructor
var LoadingArc = function(x, y, w, h, s)
{
	// xy=position, wh=diameter, speed=what value the degrees should be incremeneted, deg=degrees,
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = s/4;
	this.startDeg = 0;
	this.deg = 0;

	// updates the arc and draws it
	this.draw = function()
	{
		this.update();
		push();
		strokeWeight(10);
		noFill();
		arc(this.x, this.y, this.w, this.h, this.startDeg, this.deg);
		pop();
	}

	// updates the arcs degrees by its speed
	this.update = function()
	{
		// increase end degree point by speed
		this.deg = (this.deg >= 359) ? 0 : (this.deg+this.speed);
		// increase starting degrees point by 25% of speed so it moves slower
		this.startDeg = (this.startDeg >= 359) ? 0 : (this.startDeg + (this.speed/4)) ;
	}
}


/* End of loading board object "class" */
