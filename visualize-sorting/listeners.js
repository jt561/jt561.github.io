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
		// fill it up with new values between 0-100,
		// with max array length also being between 0-100
		let limit = Math.floor(Math.random() * 101);
		for (let i = 0; i < limit; i++)
		{
			values.push(Math.floor(Math.random() * 101));
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
	$('#insertBtn').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		// default and minimum to add is 0
		if ($('#newValue').val() == "" || $('#newValue').val() < 0)
		{
			values.push(0);
		}
		else
		{
			values.push($('#newValue').val());
		}
		// store copy of new array for resseting purporses
		valuesCopy = [...values];
	});
	// removes values from end of array
	$('#removeBtn').on('click touchstart', function() {
		// stop current sort
		$('#stopBtn').click();
		values.pop();
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
