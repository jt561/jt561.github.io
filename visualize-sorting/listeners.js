$(document).ready(function() {

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
		sortType = $(this).val();
		console.log(sortType);
		$('#stopBtn').click();
	});

});
