/**
 * Main board
 */

/* Global variables */
let paused = true;
let scl;
let heightscl;
// set values to be sorted
let values = [0, 1, 2, 3, 5, 6, 7, 2, 4, 8, 25, 1, 2, 4, 5, 6, 20, 2, 4, 8];
let valuesCopy = [...values];
let sorts = [];
let sortType = "bubble";
let timerActive = false;
let startTime = 0;
let endTime = 0;
let timeSet = false;
// time taken in milliseconds
let timeTaken = 0;

let ready = false;

// called once
function setup() {
  // create board/canvas
	// full width for mobile, less for tablet and desktop
  let deviceWidth = window.screen.width - ((window.matchMedia("(max-width: 768px)").matches) ? 1:(window.matchMedia("(max-width: 1024px)").matches) ? 50:350);
  let deviceHeight = window.screen.height - ((window.matchMedia("(max-width: 768px)").matches) ? 400:380);
	// not using these for now
	let documentWidth = $(document).width() - 5;
  let documentHeight = $(document).height() - 100;
  createCanvas(deviceWidth, deviceHeight);
  // set a framerate/loop speed
  frameRate(20);
}

// draw loop
function draw() {
  // background color - black
  background(0,0,0);

	// before sorting
	if (paused)
	{
		// the end time hasnt been set
		timeSet = false;
		// assign scale/ size of the bars/values
		scl = width/values.length;
		heightscl = height/Math.max(...values)/1.1;
		// draw the bars for the values
		printArrayAll(values, values.length, values.length, false);
	}
	else
	{
		// set up the type of sort, create the right sort object to use
		// should only run once
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
					sorts[0] = new InsertionSort(scl, values);
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
			// call appropriate sort, start soring
			sorts[0].sort();
		}
	}
	// display the raw values, in underneath the graph
	showValuesAsText();
}

// print array
function printArrayAll(arr, j, j1, done)
{
	stroke(255, 255, 255);
	// for each value
	for (let i = 0; i < arr.length; i++)
	{
		// if done sorting
		if (done)
		{
			// set end time
			// should only run once
			if (!timeSet)
			{
				// stop timer
				timerActive = false;
				endTime = new Date().getTime();
				timeTaken = endTime - startTime;
				timeSet = true;
			}
			// display time taken for sorting to finish
			fill(255, 255, 255);
			textSize(30);
			text((timeTaken/1000)+"s",width/2,height/2);
			fill(0, 255, 0);
		}
		// whilst still sorting
		else
		{
			// highligh the 2 given values as red and blue
			if (i == j)
			{
				fill(0, 255, 0);
			}
			else if (i == j1)
			{
				fill(0, 0, 255);
			}
			// highlight all values as red
			else
			{
				fill(255, 0, 0);
			}
		}
		// draw/colour all values
		rect(i*scl, height, scl, -arr[i]*heightscl);
	}
}

// shows array values as text under the canvas, they are placed in buttons inside a table.
function showValuesAsText()
{
	// remove all values shown
	$('.value button').remove();
	// refresh the row with the values in array
	for (let i = 0; i < values.length; i++)
	{
		$('.value').append('<button>' + values[i] + '</button>');
	}
}

// used to create and display timer on page
// it displays a count,in a button tag
function updateTimer()
{
	// exit condition
	// if it should be running
	if (timerActive)
	{
		// set a 1milli dealay and increment count,
		// uses recursion
		setTimeout(() => {
			let currentTime = $('#timer1 .v').text();
			currentTime = parseInt(currentTime);
			// add one to current time
			$('#timer1 .v').text(currentTime +  1);
			updateTimer();
		},1);
	}
}
/* End of main board */
