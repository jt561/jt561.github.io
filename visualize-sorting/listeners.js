$(document).ready(function() {

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

	// add listenr to first/page/? alert button
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
		// toggle extended control center
		if ($('.extended-control-center').css('display') == 'block')
		{
			$('.extended-control-center').css("display", "none");
			// hide extra details for extended control
			$('.extended-control-artifacts').css("display", "none");
			// change text of it
			$('#extendedControlCenterBtn').text('Open extended control panel');
		}
	  else
		{
	 		$('.extended-control-center').css("display", "block");
			$('.extended-control-artifacts').css("display", "block");
			// special cases that need to be inline
			$('.extended-control-artifacts.inline').css("display", "inline-block");
			$('#extendedControlCenterBtn').text('Close extended control panel');
	 	}
	});

	// add event listeners to all buttons on the page
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
		// keeps copy of array for resseting purposed
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
		// store copy of new array
		valuesCopy = [...values];
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
		if ($('#newValue').val() == "" || $('#newValue').val() < 0)
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
		// store copy of new array for resseting purporses
		valuesCopy = [...values];
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
		valuesCopy = [...values];
	});

	// select bubble sort by default at start
	$('#bubble').addClass('currentSort');
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
			$('#timer1 .v').text(0);
			timerActive = true;
			updateTimer();
		}
		// set fps/playback speed
		playbackSpeed = $('#playback-speed').val();
	});

	// stops sorting and also, the timer
	$('#stopBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		// stop timer
		timerActive = false;
	});

});
