$(document).ready(function() {

	// specify if the event listener is passive for better scroll experience. got help from stackoverflow
	jQuery.event.special.touchstart = {
	  setup: function( _, ns, handle ) {
	      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
	  }
	};

	$('#resetBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values.splice(0, values.length);
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
	});

	// button to increment value that will be inserted;
	$('.incAndDec').on('click touchstart', function() {
		if($(this).attr('id') == 'increaseValBtn')
		{
			let inc = parseInt($('#newValue').val())+1;
			if (inc > 100) inc = 100;
			$('#newValue').val(inc);
		}
		else if($(this).attr('id') == 'decreaseValBtn')
		{
			let dec = parseInt($('#newValue').val())-1;
			if (dec < 0) dec = 0;
			$('#newValue').val(dec);
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
	});

	$('#bubble').addClass('currentSort');
	$('.radio1').on('click touchstart', function() {
		// display warning for unavailable sorts and hide it after
		$('.all-sorts-not-available-warning').css("display", "block");
		setTimeout(() => { $('.all-sorts-not-available-warning').css("display", "none"); },2000);
		$('.radio1').each(function() {
			$(this).removeClass('currentSort');
		});
		$(this).addClass('currentSort');
		sortType = $(this).attr('id');
		$('#stopBtn').click();
	});

	$('#startBtn').on('click touchstart', function() {
		paused = false;
	});
	$('#stopBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
	});

});
