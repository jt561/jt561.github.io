/**
 * Main board
 */

/* Global variables */
let paused = true;
let scl;
let heightscl;
// set values to be sorted
let values = [25, 1, 8, 20, 5, 6, 7, 2, 4, 8, 0, 1, 2, 4, 5, 6, 3, 2, 2, 4];
let valuesCopy = [...values];
// sorting algorithm objects
let sorter;
// default sorting algorithm
let sortType = "bubble";
// whether it should be running a counter
let timerActive = false;
// start time, end time, and timeset which keeps track of whether time taken
// has been set
let startTime = 0;
let endTime = 0;
let timeSet = false;
// time taken in milliseconds
let timeTaken = 0;
// ready to sort
let ready = false;

// stores the different frame rates used
let frameRates = [];
frameRates["ultraLow"] = 1;
frameRates["low"] = 10;
frameRates["medium"] = 25;
frameRates["high"] = 40;
frameRates["ultraHigh"] = 60;
// stores a value for playback which is used as the frame rate
let playbackSpeed = "medium";

// called once at start
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
  frameRate(frameRates[playbackSpeed]);
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
		printArrayAll(values, values.length, values.length, values.length, false);
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
					sorter = new BubbleSort(scl, values);
					break;
				case "selection":
					sorter = new SelectionSort(scl, values);
					break;
				case "insertion":
					sorter = new InsertionSort(scl, values);
					break;
				case "merge":
					sorter = new MergeSort(scl, values);
					break;
				case "quick":
					sorter = new QuickSort(scl, values);
					break;
			}
			// start using the sort object
			ready = true;
			// dont run on an empty array
			if (values.length < 1) { $('#stopBtn').click() }
			// set playback speed/framerate/sort Speed
			frameRate(frameRates[playbackSpeed]);
		}
		else
		{
			// call appropriate sort, start soring
			sorter.sort();
		}
	}
	// display the raw values, in underneath the graph
	showValuesAsText();
}

// print array
function printArrayAll(arr, toSwap, cIndex, toSwap2, done)
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
		}
		// whilst still sorting
		else
		{
			// color scheme, toSwap=green, cIndex=blue, toSwap2=yellow
			// highlight the current value being evaluated as blue
			if (i == cIndex)
			{
				fill(0, 0, 255);
			}
			// highlight the value to be swapped as green
			else if (i == toSwap)
			{
				fill(0, 255, 0);
			}
			// highlight the value that is about to be swapped with the first
			// value that will be swapped, as yellow
			else if (i == toSwap2)
			{
				fill(255, 255, 0);
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

	if (done)
	{
		// display time taken for sorting to finish
		stroke(0, 0, 0);
		fill(255, 255, 255);
		textSize(30);
		// convert millis to second, center text
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		text((timeTaken/1000)+" s", width/2, height/2);
		// text((timeTaken/1000)+"s", width/2 - (width/100*5), height/2 - (height/100*5));
		// reset stroke and fill to white and green
		stroke(255, 255, 255);
		fill(0, 255, 0);
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
			$('#timer1 .v').text(currentTime +  2);
			updateTimer();
		},0);
	}
}
/* End of main board */
