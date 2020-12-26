$(document).ready(function() {

	// specify if the event listener is passive for better scroll experience. got help from stackoverflow
	jQuery.event.special.touchstart = {
	  setup: function( _, ns, handle ) {
	      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	  }
	};

	// add listener to the "?"/pop up button
	$('.popup').on('click touchstart', function() {
		$('#myPopup').toggleClass('show');
		if ($('#myPopup').hasClass('show'))
		{
			alert("Welcome to my sorting algorithms visualization tool.\nThis site should provide you with visuals for different sorting algorithms on any list of your choice. \nThis site was created by Joshua Tetteh.");
		}
	});

	$('#clearBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values.splice(0, values.length);
	});
	$('#resetBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values = [...valuesCopy];
	});
	$('#randomizeBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values.splice(0, values.length);
		let limit = Math.floor(Math.random() * 31);
		for (let i = 0; i < limit; i++)
		{
			values.push(Math.floor(Math.random() * 31));
		}
		valuesCopy = [...values];
	});

	// button to increment value that will be inserted;
	$('.incAndDec').on('click touchstart', function() {
		if($(this).attr('id') == 'increaseValBtn')
		{
			if ($('#newValue').val() == "")
			{
				$('#newValue').val(1);
			}
			else
			{
				let inc = parseInt($('#newValue').val())+1;
				if (inc > 100) inc = 100;
				$('#newValue').val(inc);
			}
		}
		else if($(this).attr('id') == 'decreaseValBtn')
		{
			if ($('#newValue').val() == "")
			{
				$('#newValue').val(0);
			}
			else
			{
				let dec = parseInt($('#newValue').val())-1;
				if (dec < 0) dec = 0;
				$('#newValue').val(dec);
			}
		}
	});

	$('#insertBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		if ($('#newValue').val() == "" || $('#newValue').val() < 0)
		{
			values.push(0);
		}
		else
		{
			values.push($('#newValue').val());
		}
		valuesCopy = [...values];
	});
	$('#removeBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values.pop();
		valuesCopy = [...values];
	});

	$('#bubble').addClass('currentSort');
	$('.radio1').on('click touchstart', function() {
		$('.radio1').each(function() {
			$(this).removeClass('currentSort');
		});
		$(this).addClass('currentSort');
		sortType = $(this).attr('id');
		$('#stopBtn').click();
	});

	$('#startBtn').on('click touchstart', function() {
		// store values for reset
		valuesCopy = [...values];
		paused = false;
		// keep track of time it takes to finish sorting
		startTime = new Date().getTime();
		// start timer
		// if only it has been started after it was stopped
		if (!paused && !ready)
		{
			$('#timer1 .v').text(0);
			timerActive = true;
			updateTimer();
		}
	});
	$('#stopBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		// stop timer
		timerActive = false;
	});

});
