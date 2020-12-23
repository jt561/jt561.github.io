/**
 * Main board
 */

/* Global variables */
var scl;
var heightscl;
var values = [];
var sorts = [];

// called once
function setup() {
  // create board/canvas
  let deviceWidth = window.screen.width - 500;
  let deviceHeight = window.screen.height - ((window.matchMedia("(max-width: 768px)").matches) ? 280:300);
  let documentWidth = $(document).width() - 5;
  let documentHeight = $(document).height() - 100;
  createCanvas(deviceWidth, deviceHeight);
  // set framerate to 10
  frameRate(20);
	// set values to be sorted
	values = [0, 1, 2, 3, 5, 6, 7, 2, 4, 8, 25, 1, 2, 4, 5, 6, 20, 2, 4, 8];
	// assign scale
	scl = width/values.length;
	heightscl = height/Math.max(...values);
	console.log(heightscl, height, Math.max(...values));
	// create sorting objects
	sorts['bubbleSort'] = new BubbleSort(scl, values);
}

// draw loop
function draw() {
  // background color - black
  background(0,0,0);
	// call appropriate sort
	sorts['bubbleSort'].sort();
	// print array
	//printArray(values);
}

// print array
function printArrayAll(arr, j, j1, done)
{
	stroke(255, 255, 255);
	for (let i = 0; i < arr.length; i++)
	{
		if (done)
		{
			fill(0, 255, 0);
		}
		else
		{
			if (i == j)
			{
				fill(0, 255, 0);
			}
			else if (i == j1)
			{
				fill(0, 0, 255);
			}
			else
			{
				fill(255, 0, 0);
			}
		}
		rect(i*scl, height, scl, -arr[i]*scl/2);
	}
}
/* End of main board */
