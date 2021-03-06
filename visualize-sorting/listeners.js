// specify if the event listener is passive for better scroll experience. got help from stackoverflow
jQuery.event.special.touchstart = {
	setup: function( _, ns, handle ) {
			this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	}
};
jQuery.event.special.touchmove = {
	setup: function( _, ns, handle ) {
			this.addEventListener('touchmove', handle, { passive: !ns.includes('noPreventDefault') });
	}
};

$(document).ready(function() {
	// add listener to first/page/? alert button
	$('#pageAlertBtn').on('click touchstart', function() {
		alert("Welcome to my sorting algorithms visualization tool.\nThis site should provide you with visuals for different sorting algorithms on any list of your choice. \nThis site was created by Joshua Tetteh.");
	});

	// add listener to second/ the "?"/pop up button
	$('.popup').on('click touchstart', function() {
		$('#myPopup').toggleClass('show');
	});
	// add listener to x/close button in the pop up text
	$('.close-popup').on('click touchstart', function() {
		$('#myPopup').removeClass('show');
	});

	// add listner to display "more stats container"
	$('#moreStatsBtn').on('click touchstart', function() {
		// toggle more stats display
		if ($('.more-stats').css('display') == 'block')
		{
			$('.more-stats').css("display", "none");
		}
	  else
		{
	 		$('.more-stats').css("display", "block");
		}
	});

	// add listener to x/close button for "more stats container"
	$('.close-more-stats').on('click touchstart', function() {
		// hide more stats
		$('.more-stats').css("display", "none");
	});

	// add listner to display "more extended control contaiener"
	$('#extendedControlCenterBtn').on('click touchstart', function() {
		// toggle extended control center off/on
		if ($('.extended-control-center').css('display') == 'block')
		{
			// remove max height attribute for control center
			$('.control-center').css("max-height","");
			$('.control-center').css("overflow-y", "");
			$('.extended-control-center').css("display", "none");
			// hide extra details for extended control
			$('.extended-control-artifacts').css("display", "none");
			// toggle button text and border
			$('#extendedControlCenterBtn').text('Open extended control panel');
			$('#extendedControlCenterBtn').css("border","");
			// reset height of start and stop to default
			$('#startBtn, #stopBtn').css("height","");
		}
	  else
		{
			// set max height height of control center to around 50% and overflow should be scrolled
			let maxHeight = window.screen.height * ((window.matchMedia("(max-width: 768px)").matches) ? (48/100):(window.matchMedia("(max-width: 1024px)").matches) ? (24/100):(42/100));
			$('.control-center').css("max-height", maxHeight);
			$('.control-center').css("overflow-y", "scroll");
	 		$('.extended-control-center').css("display", "block");
			$('.extended-control-artifacts').css("display", "block");
			// special cases that need to be inline
			$('.extended-control-artifacts.inline').css("display", "inline-block");
			$('#extendedControlCenterBtn').text('Close extended control panel');
			$('#extendedControlCenterBtn').css("border","2px dotted #fff");
			// make start and stop button bigger
			$('#startBtn, #stopBtn').css("height","80px");
	 	}
	});

	// add event listeners to empty array list
	$('#clearBtn').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// clears array
		values.splice(0, values.length);
	});

	// resets array list to its previous values before it was sorted
	$('#resetBtn').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// restores main array with its old copy
		values = [...valuesCopy];
	});

	// provides new and random values for array list
	$('#randomizeBtn').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// clear array
		values.splice(0, values.length);
		// fill it up with new values between 0-100(now, using given range),
		// with max array length also being between 0-100(now using given range)
		let biggestListSize = parseInt($('#biggestListVal1').val());
		let smallestListSize = parseInt($('#smallestListVal1').val());
		let minVal = parseInt($('#smallestVal1').val());
		let maxVal = parseInt($('#biggestVal1').val());
		// get random number between 0 and (max[+1]-min), round it down, add min offset
		let maxArrSize = Math.floor(Math.random() * ((biggestListSize-smallestListSize)+1)) + smallestListSize;
		for (let i = 0; i < maxArrSize; i++)
		{
			// get random number between 0 and (max[+1]-min), round it down, add min offset
			values.push(Math.floor(Math.random() * (maxVal-minVal+1)) + minVal);
		}
	});

	// button to increment and decrement value that will be inserted;
	$('.incAndDec').on('click touchstart', function() {
		// increase button
		if($(this).attr('id') == 'increaseValBtn')
		{
			// default is 1
			if ($('#newValue').val() == "")
			{
				$('#newValue').val(1);
			}
			else
			{
				// increase until it reaches max of 100
				let inc = parseInt($('#newValue').val())+1;
				if (inc > 100) inc = 100;
				$('#newValue').val(inc);
			}
		}
		// decrement button
		else if($(this).attr('id') == 'decreaseValBtn')
		{
			if ($('#newValue').val() == "")
			{
				$('#newValue').val(0);
			}
			else
			{
				// decrease until it reaches 0
				let dec = parseInt($('#newValue').val())-1;
				if (dec < 0) dec = 0;
				$('#newValue').val(dec);
			}
		}
	});

	// add value in input field to end of array
	$('#insertBtn, #insertBtnF').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// default and minimum to add is 0
		if ($('#newValue').val() == "")
		{
			if ($(this).attr('id') == 'insertBtnF')
			{
				values.unshift(0);
			}
			// insert to end
			else
			{
				values.push(0);
			}
		}
		else
		{
			if ($(this).attr('id') == 'insertBtnF')
			{
				values.unshift($('#newValue').val());
			}
			// insert to end
			else
			{
				values.push($('#newValue').val());
			}
		}
	});

	// removes values from end/start of array
	$('#removeBtn, #removeBtnF').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// remove from front
		if ($(this).attr('id') == 'removeBtnF')
		{
			values.shift();
		}
		// remove from end
		else
		{
			values.pop();
		}
	});

	// randomize the list at start
	$('#randomizeBtn').click();
	// store a copy of the new randomized list, when page first loads
	valuesCopy = [...values];
	// select/highlight insertion sort by default at start
	$('#insertion').addClass('currentSort');
	// add litenrs to all sorting method buttons
	// so it can be highlighred and used
	$('.radio1').on('click touchstart', function() {
		$('.radio1').each(function() {
			$(this).removeClass('currentSort');
		});
		$(this).addClass('currentSort');
		sortType = $(this).attr('id');
		// stop sorting when we change sorts
		$('#stopBtn').click();
	});

	// starts the sorting algorithms
	$('#startBtn').on('click touchstart', function() {
		// only work on valid arrays
		if (values.length < 1)
		{
			return;
		}
		// add gradient effect/sorting effecting
		$(this).css("background-image","linear-gradient(to right, green , black)");
		$(this).css("animation","animateStartBtn 2s ease-in-out 0s infinite normal");
		// change text from start to sorting, change it back from the stopbtn/listener
		$(this).text("Sorting");
		// store values for reset
		valuesCopy = [...values];
		// unpause
		paused = false;
		// keep track of time it takes to finish sorting
		startTime = new Date().getTime();
		// start timer
		// if only it has been started after it was stopped
		// so if we are not paused, but havent started sorting
		if (!paused && !ready)
		{
			// timer is now called count
			$('#timer1 .v').text(0);
			timerActive = true;
			updateTimer();
		}
	});

	// stops sorting and also, the timer
	$('#stopBtn').on('click touchstart', function() {
		// remove gradient from start button
		$('#startBtn').css("background-image","");
		$('#startBtn').css("animation","");
		// change start btn text from 'sorting' to start
		$('#startBtn').text("Start");
		paused = true;
		ready = false;
		// stop timer
		timerActive = false;
	});

	// monitors playback speed select tag
	$('#playback-speed').change(function() {
		// set fps/playback speed
		playbackSpeed = $('#playback-speed').val();
	});

	// monitors, select tag for sort direction(ascending/descending),
	// sets its value to global
	$('#sortDirection1').change(function() {
		sortDirection = $(this).val();
	});

	// monitors, select tag for allow negatives, sets its value to global
	// variable
	$('#allowNegatives1').change(function() {
		allowNegatives = $(this).val();
	});

	// add on change listener, so when a new option is selected,
	// its value gets assigned to the global variable
	// changes the colors of the bars on the page
	$('#bar1').change(function() {
		bar['1'] = $(this).val();
	});
	$('#bar2').change(function() {
		bar['2'] = $(this).val();
	});
	$('#bar3').change(function() {
		bar['3'] = $(this).val();
	});
	$('#bar4').change(function() {
		bar['4'] = $(this).val();
	});
	// changes the colors of the stroke of the bars on the page
	$('#stroke1').change(function() {
		canvColors['stroke'] = $(this).val();
	});
	// changes the colors of the background on the page
	$('#background1').change(function() {
		canvColors['background'] = $(this).val();
	});

});
