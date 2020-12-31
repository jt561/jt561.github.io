/**
 * Main board
 */

/* Global variables */
// dont start sorting
let paused = true;
// scale/width of the bars
let scl;
// scale/height of a value
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
// array has been unsorted
let finished = false;
// stores extra stats/details
let moreStats = [];
moreStats['swaps'] = 0;
moreStats['comparisons'] = 0;
moreStats['auxiliaryWrites'] = 0;
moreStats['listSize'] = 0;
moreStats['largestNumber'] = 0;
moreStats['smallestNumber'] = 0;
moreStats['timeElapsed'] = 0;
// sort in ascending or descending (ASC/DESC)
let sortDirection = "ASC";
// type of display for values, (bar or pie or pyramid)
let displayType = "bar";
// should negatives be shown on the canvas(no/yes)
let allowNegatives = "no";
// colours for the bar graph
let bar = [];
bar['1'] = "blue";
bar['2'] = "green";
bar['3'] = "yellow";
bar['4'] = "red";
// colors for the canvas
let canvColors = [];
canvColors['stroke'] = "white";
canvColors['background'] = "black";

// called once at start
function setup() {
  // create board/canvas
	// full width for mobile, less for tablet and desktop
  let deviceWidth = window.screen.width - ((window.matchMedia("(max-width: 768px)").matches) ? 1:(window.matchMedia("(max-width: 1024px)").matches) ? 40:320);
	// half of the device height for all device types
	let deviceHeight = window.screen.height - ((window.matchMedia("(max-width: 768px)").matches) ? 440:(window.matchMedia("(max-width: 1024px)").matches) ? 440:440);
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
  background(canvColors['background']);

	// before sorting
	if (paused)
	{
		finished = false;
		// the end time hasnt been set
		timeSet = false;
		// assign scale/ size of the bars/values
		scl = width/values.length;
		// height should only cover 95 of the page, so we minus 0.95 from 2,
		// we then get 1.05, and divide it by the final scale of 1,(we can also
		// multiply the final scale 0.95), which we get
		// from dividing the canvas height by the largest value in the array
		heightscl = height/Math.max(...values)/1.05;
		// draw the bars for the values
		printArrayAll(values, values.length, values.length, values.length, false);
	}
	else
	{
		// set up the type of sort, create the right sort object to use
		// should only run once before sorting starts
		if (!ready)
		{
			switch (sortType)
			{
				case "bubble":
					sorter = new BubbleSort(values);
					break;
				case "selection":
					sorter = new SelectionSort(values);
					break;
				case "insertion":
					sorter = new InsertionSort(values);
					break;
				case "merge":
					sorter = new MergeSort(values);
					break;
				case "quick":
					sorter = new QuickSort(values);
					break;
			}
			// reset all values in moreStats array to 0
			resetExtraStats();
			// set playback speed/framerate/sort Speed
			frameRate(frameRates[playbackSpeed]);
			// start using the sort object
			ready = true;
			// dont run on an empty array
			if (values.length < 1) { $('#stopBtn').click(); }
		}
		else
		{
			// call appropriate sort, start soring
			// it sorts and prints array at each sort point
			sorter.sort();
		}
	}
	// display the raw values, underneath the graph
	showValuesAsText();
	// display extra stats on screen
	updateExtraStatsAsText()
}

// print array
function printArrayAll(arr, toSwap, cIndex, toSwap2, done)
{
	stroke(canvColors['stroke']);
	// for each value
	for (let i = 0; i < arr.length; i++)
	{
		// if done sorting
		if (done)
		{
			/* green colour gets set at the bottom [if done statement] */
			// set end time
			// should only run once
			if (!timeSet)
			{
				// store finished for bottom values
				finished = true;
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
				fill(bar['1']);
			}
			// highlight the value to be swapped as green
			else if (i == toSwap)
			{
				fill(bar['2']);
			}
			// highlight the value that is about to be swapped with the first
			// value that will be swapped, as yellow
			else if (i == toSwap2)
			{
				fill(bar['3']);
			}
			// highlight all values as red
			else
			{
				fill(bar['4']);
			}
		}
		// draw/colour all values
		// invert the heigh as positive takes you down and negative takes you up.
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
		// reset stroke and fill to white and green
		stroke(canvColors['stroke']);
		fill(bar['2']);
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
		if (finished)
		{
			$('.value').append('<button class=done>' + values[i] + '</button>');
		}
		else
		{
			$('.value').append('<button class=not-done>' + values[i] + '</button>');
		}
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
			// I dont know why i picked this number, its arbituary
			// add number to current time
			moreStats['timeElapsed'] += 0.0005;
			// display number, rounded to 5 decimal place
			$('#timer1 .v').text(moreStats['timeElapsed'].toFixed(5));
			updateTimer();
		},0);
	}
}

// resets extra stats values
function resetExtraStats()
{
	moreStats['swaps'] = 0;
	moreStats['comparisons'] = 0;
	moreStats['auxiliaryWrites'] = 0;
	moreStats['listSize'] = 0;
	moreStats['largestNumber'] = 0;
	moreStats['smallestNumber'] = 0;
	moreStats['timeElapsed'] = 0;
}

// updates the html tags with the values from the moreStats array
function updateExtraStatsAsText()
{
	// before showing text, get calculate necessary values
	moreStats['listSize'] = values.length;
	moreStats['largestNumber'] = Math.max(...values);
	moreStats['smallestNumber'] = Math.min(...values);
	// show as text
	$('#swaps1 .v').text(moreStats['swaps']);
	$('#comparisons1 .v').text(moreStats['comparisons']);
	$('#auxiliaryWrites1 .v').text(moreStats['auxiliaryWrites']);
	$('#listSize1 .v').text(moreStats['listSize']);
	$('#largestNumber1 .v').text(moreStats['largestNumber']);
	$('#smallestNumber1 .v').text(moreStats['smallestNumber']);
}
/* End of main board */
