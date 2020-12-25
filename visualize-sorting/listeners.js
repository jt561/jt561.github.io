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
	$('#insertBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
		values.push($('#newValue').val());
	});
	$('#startBtn').on('click touchstart', function() {
		paused = false;
		sortType = $('input[name="sortType"]:checked').val();;
	});
	$('#stopBtn').on('click touchstart', function() {
		paused = true;
		ready = false;
	});

	$('input[type="radio"]').on('click touchstart', function() {
		// display warning for unavailable sorts and hide it after
		$('.all-sorts-not-available-warning').css("display", "block");
		setTimeout(() => { $('.all-sorts-not-available-warning').css("display", "none"); },2000);
		sortType = $(this).val();
		$('#stopBtn').click();
	});

});
