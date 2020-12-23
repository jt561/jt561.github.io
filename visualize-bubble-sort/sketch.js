/**
 * Main board
 */

/* Global variables */
let paused = true;
let scl;
let heightscl;
// set values to be sorted
let values = [0, 1, 2, 3, 5, 6, 7, 2, 4, 8, 25, 1, 2, 4, 5, 6, 20, 2, 4, 8];
let sorts = [];
let sortType;

let ready = false;

// called once
function setup() {
  // create board/canvas
  let deviceWidth = window.screen.width - 500;
  let deviceHeight = window.screen.height - ((window.matchMedia("(max-width: 768px)").matches) ? 280:350);
  let documentWidth = $(document).width() - 5;
  let documentHeight = $(document).height() - 100;
  createCanvas(deviceWidth, deviceHeight);
  // set framerate to 10
  frameRate(20);
}

// draw loop
function draw() {
  // background color - black
  background(0,0,0);

	if (paused)
	{
		// assign scale
		scl = width/values.length;
		heightscl = height/Math.max(...values)/1.1;
		//console.log(heightscl, height, Math.max(...values));
		printArrayAll(values, values.length, values.length, false);
	}
	else
	{
		// set up the type of sort, create the right sort object to use
		if (!ready)
		{
			switch (sortType)
			{
				case "bubble":
					sorts[0] = new BubbleSort(scl, values);
					break;
				case "selection":
					sorts[0] = new SelectionSort(scl, values);
					break;
				case "insertion":
					sorts[0] = new insertionSort(scl, values);
					break;
				case "merge":
					sorts[0] = new MergeSort(scl, values);
					break;
				case "quick":
					sorts[0] = new QuickSort(scl, values);
					break;
			}
			// start using the sort object
			ready = true;
		}
		else
		{
			// call appropriate sort
			sorts[0].sort();
			// print array
			//printArray(values);
		}
	}
	showValuesAsText();
	//console.log(sortType);
	//console.log(paused, ready);
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
		rect(i*scl, height, scl, -arr[i]*heightscl);
	}
}

//
function showValuesAsText()
{
	var text = "";
	for (let i = 0; i < values.length; i++)
	{
		text += values[i] + ((i == values.length-1) ? "" : ",");
	}
	$('.value').text(text);
}
/* End of main board */
